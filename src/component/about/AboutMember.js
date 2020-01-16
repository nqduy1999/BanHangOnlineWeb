import React from 'react';

import duyImg from '../../resource/images/duydeptrai.jpg';
import hungImg from '../../resource/images/duyhung.jpg';
import truongImg from '../../resource/images/truong.jpg';
const AboutMember = () => {
    return (
        <div className="site-section border-bottom" data-aos="fade-up">
        <div className="container">
            <div className="row justify-content-center mb-5">
            <div className="col-md-7 site-section-heading text-center pt-4">
                <h2>Thành Viên</h2>
            </div>
            </div>
            <div className="row">
            <div className="col-md-6 col-lg-4">
                <div className="block-38 text-center">
                <div className="block-38-img">
                    <div className="block-38-header">
                    <img className="mb-4" alt="" src={truongImg} />
                    <h3 className="block-38-heading h4">Đặng Lê Minh Trường </h3>
                    <p className="block-38-subheading">Trưởng Nhóm</p>
                    <p className="block-38-subheading">17019711</p>
                    </div>
                    <div className="block-38-body">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque eligendi est ex odit fuga harum dicta perferendis iste rem provident. Architecto numquam excepturi quibusdam ut maxime commodi amet sequi ipsum.</p>
                    </div>
                </div>
                </div>
            </div>
            <div className="col-md-6 col-lg-4">
                <div className="block-38 text-center">
                <div className="block-38-img">
                    <div className="block-38-header">
                    <img src={duyImg} alt="Image placeholder" className="mb-4" />
                    <h3 className="block-38-heading h4">Nguyễn Quốc Duy</h3>
                    <p className="block-38-subheading">Thành Viên</p>
                    <p className="block-38-subheading">17018481</p>
                    </div>
                    <div className="block-38-body">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque eligendi est ex odit fuga harum dicta perferendis iste rem provident. Architecto numquam excepturi quibusdam ut maxime commodi amet sequi ipsum.</p>
                    </div>
                </div>
                </div>
            </div>
            <div className="col-md-6 col-lg-4">
                <div className="block-38 text-center">
                <div className="block-38-img">
                    <div className="block-38-header">
                    <img src={hungImg} alt="Image placeholder" className="mb-4" />
                    <h3 className="block-38-heading h4">Nguyễn Duy Hưng</h3>
                    <p className="block-38-subheading">Thành Viên</p>
                    <p className="block-38-subheading">17043131</p>
                    </div>
                    <div className="block-38-body">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque eligendi est ex odit fuga harum dicta perferendis iste rem provident. Architecto numquam excepturi quibusdam ut maxime commodi amet sequi ipsum.</p>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        </div>
    );
};

export default AboutMember;