import React from 'react'
import styles from "./portfolioItem.css";
import classNames from 'classnames';
import Title, { TitleSize } from '../title/Title';
import Image, { ImageSize } from '../image/Image';
import Modal from '../modal/modal';

export const ItemColor = {
    PRIMARY: 'primary-color',
    SECUNDARY: 'secundary-color',
}

class PortfolioItem extends React.Component {

    constructor(props) {
        super(props);
        this.state = { modalState: false };
    };

    ChangeModalState = () => {
        const temp = !this.state.modalState;
        this.setState({modalState: temp})
    }

    render() {
        const { title, src, alt, theme, data, className } = this.props;

        const classProps = classNames(
            styles.item,
            theme,
            className
        )

        return (
            <div>
                <div className={classProps} onClick={this.ChangeModalState}>
                    <div className="k-portfolio-image"><Image src={src} alt={alt} size={ImageSize.FIT} /></div>
                    <Title text={title} size={TitleSize.SMALL} />
    
                </div>
                {this.state.modalState ? <Modal title={data.title} src={data.src} description={data.description} characteristics={data.characteristics} screenshots={data.screenshots} get_description={data.get_description} text_link={data.text_link} link={data.link} clickHandler={this.ChangeModalState}/>:null}
            </div>
        )
    };
}

PortfolioItem.defaultProps = {
    className: 'k-portfolio-item',
    theme: ItemColor.PRIMARY,
    title: "ejemplo",
    data: {}
}

export default PortfolioItem;