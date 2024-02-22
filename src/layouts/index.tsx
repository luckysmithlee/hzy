import logo from '@/assets/logo.png';
import { CloseOutlined, MenuOutlined } from '@ant-design/icons';
import { Layout, Menu, theme } from 'antd';
import { useEffect, useState } from 'react';
import { Outlet, history } from 'umi';
import styles from './index.less';
const { Header, Content, Footer } = Layout;

const items = [
  { key: 'home', label: '首页' },
  { key: 'research_direction', label: '研究方向' },
  { key: 'achievements&papers', label: '成果及论文' },
  { key: 'members', label: '组员介绍' },
  { key: 'news', label: '课题组新闻' },
  { key: 'activity', label: '组内活动' },
  { key: 'contact_us', label: '联系我们' },
  // { key: 'research_resources', label: '科研资源' },
];

export default function indexLayout() {
  const isHome = location.href.includes('/home');
  const [shownav, setShowNav] = useState(!isHome);
  const [isMobile, setIsMobile] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    if (window.screen.width < 500) {
      // 当前设备是移动设备
      setIsMobile(true);
    }
    window.addEventListener('scroll', () => {
      const scrollTop =
        document.documentElement.scrollTop || document.body.scrollTop;
      if (scrollTop < 10 && isHome) {
        setShowNav(false);
      } else {
        setShowNav(true);
      }
    });
    return () => {
      window && window.removeEventListener('scroll', () => {});
    };
  }, []);

  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const onMenuSelect = ({ key }: { key: string }) => {
    key === 'home' ? setShowNav(false) : setShowNav(true);
    history.push(key);
  };

  return (
    <Layout>
      <Header
        className={styles.header}
        style={shownav || isMobile ? {} : { background: 'transparent' }}
      >
        <div className={styles.logo} onClick={() => history.push('home')}>
          <img src={logo} alt="成都理工大学" style={{ height: 35 }} />
          <span className={styles.hanliu}>
            <i>—— 有温度的韩流</i>
          </span>
        </div>
        <div className={styles.icon} onClick={() => setShowMenu(!showMenu)}>
          {isMobile ? showMenu ? <CloseOutlined /> : <MenuOutlined /> : null}
        </div>
        <Menu
          mode={isMobile ? 'inline' : 'horizontal'}
          theme="dark"
          items={items}
          className={styles.menu}
          onClick={onMenuSelect}
          selectable={false}
        />
      </Header>
      <Content
      // style={{ padding: '0 48px', width: '100%' }}
      >
        {/* <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb> */}
        <Outlet context={{ isMobile }} />
      </Content>
      {/* <Footer style={{ textAlign: 'center' }}>
        Ant Design ©{new Date().getFullYear()} Created by Ant UED
      </Footer> */}
    </Layout>
  );
}
