import React from "react"
import { Carousel, WingBlank } from 'antd-mobile';
class SlideShow extends React.Component{
    state = {
        data: ['1','2','3'],
        imgHeight: 176,
    }
    render(){
        return (
            <div>
                <WingBlank>
                <Carousel
                    autoplay={true}
                    infinite
                >
                    {this.state.data.map(val => (
                    <a
                        key={val}
                        href="jsvascripy:;"
                        style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
                    >
                        <img
                        src={`https://static.maizuo.com/v5/upload/${val}?x-oss-process=image/quality,Q_70`}
                        alt=""
                        style={{ width: '100%', verticalAlign: 'top' }}
                        onLoad={() => {
                            window.dispatchEvent(new Event('resize'));
                            this.setState({ imgHeight: 'auto' });
                        }}
                        />
                    </a>
                    ))}
                </Carousel>
                </WingBlank>
            </div>
          );
    }
    componentDidMount() {
        setTimeout(() => {
          this.setState({
            data: ['11a63bdb3adebae012453f0bd1ae02d0.jpg', 
                '363ed0cbf698655a04a7fe167640ad92.jpg', 
                '458912a3c5e4f91d1f1878eabdbab256.jpg'
            ],
          });
        }, 100);
      }
    
}
export default SlideShow;