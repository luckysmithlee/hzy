import banner1 from '@/assets/banner1.jpg';
import banner3 from '@/assets/banner3.jpg';
import hzy from '@/assets/hzy.png';
import { Divider, Flex, Typography } from 'antd';
import { A11y, Autoplay, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import styles from './index.less';

const { Title, Paragraph, Text, Link } = Typography;

export default function HomePage() {
  return (
    <Typography style={{ background: '#fff', fontSize: 16 }}>
      <Swiper
        modules={[Navigation, Pagination, Autoplay, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        pagination={{ clickable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
        style={{ height: '100vh', top: '-64px' }}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        speed={1000}
      >
        <SwiperSlide>
          <img width={'100%'} src={banner1} />
        </SwiperSlide>
        <SwiperSlide>
          <img
            width={'100%'}
            src={banner3}
            style={{ objectFit: 'cover', objectPosition: 'top' }}
          />
        </SwiperSlide>
      </Swiper>
      <Flex justify="center" className={styles.homeContainer}>
        <img
          src={hzy}
          width={280}
          height={280}
          style={{ objectFit: 'cover', objectPosition: 'top' }}
        />
        <Paragraph style={{ width: 770, marginLeft: 30 }}>
          <Paragraph style={{ margin: '10px 0 25px' }}>
            <Title
              style={{
                display: 'inline-block',
                fontSize: 24,
                margin: 0,
              }}
            >
              韩智勇
            </Title>

            <Text style={{ marginLeft: 10, color: '#999', fontSize: 16 }}>
              工学博士 地质工程与地质资源博士后 教授 博士生导师
            </Text>
            <Paragraph style={{ color: '#808080', marginTop: 5, fontSize: 16 }}>
              固体废物管理与资源化处理课题组
            </Paragraph>
          </Paragraph>
          <Paragraph
            ellipsis={{ rows: 7 }}
            style={{
              color: '#808080',
              lineHeight: '26px',
              fontSize: 16,
            }}
          >
            韩智勇，男，岐佬族，1983年03月出生于贵州。教授，博士生导师，地质灾害防治与地质环境保护国家重点实验室（成都理工大学）、国家环境保护水土污染协同控制与联合修复重点实验室（成都理工大学）固定研究人员；四川省第十二批学术和技术带头人后备人选、四川省高级海外高层次人才；美国特拉华大学访问学者；四川省科技厅、环保厅专家库成员，四川省重点行业土壤调查、四川省固管中心专家库成员，成都市环境保护局环保咨询专家；中国硅酸盐学会固废与生态材料分会危险固废学术委员会常务委员、中国土壤学会青年工作委员会创新委员；环境影响评价工程师、注册环保工程师、清洁生产审核师、环境监理工程师；环境工程国家一流专业负责人，固体废物处理处置与资源化四川省一流课程负责人。
            主要从事固体废物管理与资源化利用，以及土壤与地下水污染评价与修复等方向的教学和研究工作。系统阐述了我国农村生活垃圾的特性，构建了基于处理技术的全过程管理模式，研发了生物反应器处理技术；系统识别了我国生活垃圾填埋场土壤重金属和地下水污染物，初步探讨了其影响因素。近5年，已先后主持国家自然基金1项，中国博后基金2项，其他省部级项目8项；参加国家重大科技项目2项，出版专著1部，教材1部，参编农业部标准1项；已获授权专利6项，在国内外期刊上已发表论文40余篇。
          </Paragraph>
        </Paragraph>
      </Flex>
      <div className={styles.homeContainer}>
        <Title level={4} className={styles.contentTitle}>
          研究方向
          <a className={styles.text}>更多 {'>'}</a>
        </Title>
        <Divider style={{ margin: '10px 0 20px' }}></Divider>
        <div>（一）固体废物管理与资源化处理</div>
        <span style={{ marginLeft: '2em' }} />
        （1）农村生活垃圾全过程管理
        <br />
        <span style={{ marginLeft: '2em' }} />
        （2）生物反应器处理技术优化与应用
        <br />
        <span style={{ marginLeft: '2em' }} />
        （3）存量垃圾资源化利用技术研发
        <div>（二）生活垃圾填埋场土壤与地下水污染评价与修复</div>
        <span style={{ marginLeft: '2em' }} />
        （1）填埋场污染场地环境风险评价；
        <br />
        <span style={{ marginLeft: '2em' }} />
        （2）填埋场土壤与地下水污染物识别、归趋与溯源；
        <br />
        <span style={{ marginLeft: '2em' }} />
        （3）填埋场土壤与地下水水土协同污染控制技术
      </div>

      <div className={styles.homeContainer}>
        <Title level={4} className={styles.contentTitle}>
          课题组新闻
          <a className={styles.text}>更多 {'>'}</a>
        </Title>
        <Divider style={{ margin: '10px 0 20px' }}></Divider>
      </div>

      <div className={styles.homeContainer}>
        <Title level={4} className={styles.contentTitle}>
          组内活动
          <a className={styles.text}>更多 {'>'}</a>
        </Title>
        <Divider style={{ margin: '10px 0 20px' }}></Divider>
      </div>

      <div className={styles.homeContainer}>
        <Title level={4} className={styles.contentTitle}>
          友情链接
        </Title>
        <Divider style={{ margin: '10px 0 20px' }}></Divider>
        <Flex align="center" justify="space-between">
          <a
            className={styles.text}
            target="_blank"
            href="https://www.cdut.edu.cn/"
          >
            成都理工大学
          </a>
          <a
            className={styles.text}
            target="_blank"
            href="https://sthjxy.cdut.edu.cn/"
          >
            成都理工大学生态环境学院
          </a>
          <a
            className={styles.text}
            target="_blank"
            href="https://sthjxy.cdut.edu.cn/info/1105/1660.htm"
          >
            成都理工大学生态环境学院——韩智勇
          </a>
        </Flex>
      </div>
    </Typography>
  );
}
