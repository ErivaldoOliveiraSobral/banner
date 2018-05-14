import * as React from 'react';
import styles from './Banner.module.scss';
import { IBannerProps } from './IBannerProps';
import { escape } from '@microsoft/sp-lodash-subset';
import Carousel from "nuka-carousel";

export default class Banner extends React.Component<IBannerProps, {}> {
  public render(): React.ReactElement<IBannerProps> {

    let options = {
      slidesToShow: 1,
      cellAlign: 'center',
      slidesToScroll: 1,
      autoplay: true,
      infinite: true,
      wrapAround: true,
      autoplaySpeed: 100
    };

    this.state = [{
      component: React.createClass({
        render() {
          return (
            <button className="botao"
              onClick={this.props.previousSlide}>
              Previous Slide
            </button>
          )
        }
      }),
      position: 'CenterLeft',
      style: {
        padding: 20
      }
    }];

    return (
      <Carousel {...options} >
        <img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide1" />
        <img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide2" />
        <img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide3" />
        <img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide4" />
        <img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide5" />
        <img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide6" />
      </Carousel>
    );
  }
}
