import yay from '@/assets/yay.jpg';
import { Carousel, Divider, Flex, Typography } from 'antd';
import styles from './index.less';
const { Title, Paragraph, Text, Link } = Typography;

export default function HomePage() {
  return (
    <Typography style={{ background: '#fff', fontSize: 16 }}>
      <Carousel
        autoplay
        autoplaySpeed={5000}
        className={styles.carousel}
        draggable
        pauseOnHover={false}
        pauseOnDotsHover
      >
        <div>
          <img width={'100%'} height={'100%'} src={yay} />
        </div>
        <div>
          <img
            width={280}
            height={280}
            src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
          />
        </div>
        <div>
          <img width={'100%'} height={'100%'} src={yay} />
        </div>
        <div>
          <img
            width={280}
            height={280}
            src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
          />
        </div>
      </Carousel>
      <Flex justify="center" className={styles.homeContainer}>
        <img
          width={280}
          height={280}
          src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
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
              研究员 博士生导师 省级人才称号
            </Text>
            <Paragraph style={{ color: '#808080', marginTop: 5, fontSize: 16 }}>
              植物分子毒理与分子生态课题组
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
            韩智勇，男，朝鲜族，1980年02月出生于吉林长春。成都理工大学生态环境学院研究员、博士生导师，学术带头人后备人选，省级青年人才项目入选者。生态环境学院综合实验中心主任，四川省科技青年联合会常务理事，四川省植物学会理事，四川省欧美同学会理事，成都理工大学欧美同学会副会长。本科、硕士分别毕业于沈阳农业大学植物保护专业和农药学专业，博士毕业于韩国庆尚国立大学应用生命科学专业。2014年01月至2017年07月于美国德州农工大学完成了博士后研究工作，于2017年07月归国。2018年03月至2018年05月就职于四川农业大学农学院，2018年05月入职成都理工大学生态环境学院。指导本科生和研究生多次获得校级优秀学位论文荣誉。目前，在Developmental
            Cell, Rice, Plant and Soil, Frontiers in Plant
            Science等国内外知名学术期刊发表论文40余篇。
          </Paragraph>
        </Paragraph>
      </Flex>
      <div className={styles.homeContainer}>
        <Title level={4} className={styles.contentTitle}>
          研究方向
          <a className={styles.text}>更多 {'>'}</a>
        </Title>
        <Divider style={{ margin: '10px 0 20px' }}></Divider>
        <div>（一）重金属、新污染物污染土壤植物修复及其机理研究</div>
        <span style={{ marginLeft: '2em' }}></span>
        从植物生理、生化、分子生物学与遗传学的角度，研究在重金属镉、抗生素、微塑料等造成污染的土壤中植物对重金属的吸收及转运机理。本研究一方面是了解重金属在作物中的吸收与转运，以为育种及食品安全提供理论基础，另外也为利用植物吸收、转移土壤中的重金属，实现生物修复提供重要的理论支撑。
        <div>（二）植物中逆境胁迫相关遗传资源筛选与功能研究</div>
        <span style={{ marginLeft: '2em' }}></span>
        以作物水稻、黑麦草、微藻等为究对象，对植物中逆境胁迫（水分、盐、极端温度等）相关基因进行筛选，并对其功能及分子机制进行分析。
        <div>（三）沙化土壤的生物治理技术与机理研究</div>
        <span style={{ marginLeft: '2em' }}></span>
        针对川西北地区（若尔盖）草原沙化比较突出的问题，利用草种、微生物、肥料、植物激素、养护技术等恢复沙地植物盖度及区域生态，并对沙化治理过程中抗逆植物基因的功能与应用及植物与土壤微生物的互作机理等开展研究。
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
      </div>
    </Typography>
  );
}
