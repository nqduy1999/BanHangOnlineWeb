import React from 'react';
import Address from '../profile/Address';

const Profile = () => {
    return (
        <div>
            <form className="container">
                <div className="row">
                    <div className="col-md-3">
                        <div class="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                            <a class="nav-link active" id="v-pills-home-tab" data-toggle="pill" href="#v-pills-home" role="tab" aria-controls="v-pills-home" aria-selected="true">Home</a>
                            <a class="nav-link" id="v-pills-profile-tab" data-toggle="pill" href="#v-pills-profile" role="tab" aria-controls="v-pills-profile" aria-selected="false">Profile</a>
                            <a class="nav-link" id="v-pills-messages-tab" data-toggle="pill" href="#v-pills-messages" role="tab" aria-controls="v-pills-messages" aria-selected="false">Messages</a>
                            <a class="nav-link" id="v-pills-settings-tab" data-toggle="pill" href="#v-pills-settings" role="tab" aria-controls="v-pills-settings" aria-selected="false">Settings</a>
                        </div>
                    </div>
                    <div className="col-md-9">
                        <div className="tab-content" id="v-pills-tabContent">
                            <div class="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab">
                                <div className="form-group">
                                    <label for="name">Họ và tên</label>
                                    <input type="text" class="form-control" id="name"  placeholder="Họ và tên của bạn"/>
                                </div>
                                <div className="form-group">
                                    <label for="phone">Số điện thoại</label>
                                    <input type="text" class="form-control" id="phone"  placeholder="Số điện thoại của bạn"/>
                                </div>
                                <div className="form-group">
                                    <label for="ID">CMND</label>
                                    <input type="text" class="form-control" id="ID"  placeholder="CMND của bạn"/>
                                </div>
                                <div className="form-group">
                                    <label for="address">Địa chỉ giao hàng</label>
                                    <Address/>
                                </div>
                            </div>
                            <div className="tab-pane fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab">...</div>
                            <div className="tab-pane fade" id="v-pills-messages" role="tabpanel" aria-labelledby="v-pills-messages-tab">...</div>
                            <div className="tab-pane fade" id="v-pills-settings" role="tabpanel" aria-labelledby="v-pills-settings-tab">...</div>
                        </div>
                    </div>
                </div>
                {/* end row*/}
            </form>
        </div>
    );
};

export default Profile;