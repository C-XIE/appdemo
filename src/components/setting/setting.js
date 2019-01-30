import React from 'react'
import { connect } from 'react-redux'
import { Page, Row, Col, Link,ListItem,List } from 'framework7-react';


function Setting(props) {
    // const { user } = props.user || { user: {} }
    return <Page >
        <div style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: "100%",
            background: "#2196f3ba",
            height: "130px",
            paddingBottom: "10px",
            justifyContent:"center"
        }} >
            {/* <img
                src={user.avatar_url}
                alt=""
                width={60}
                height={60}
                style={{ borderRadius: "50%", marginTop: "30px", marginBottom: "10px" }}
            />
            <div style={{ fontSize: "18px", color: "white", lineHeight: "30px" }} >{user.login_name}</div> */}
            <Link href="/login" style={{fontSize:"24px",color:"white"}} >点击登陆</Link>
        </div>
        <Row style={{ textAlign: "Center", fontSize: "28px" }} >
            <Col className="setting_col" >
                <Link style={{ flexDirection: "column" }} >211<div className="setting_word" >帖子</div></Link>
            </Col>
            <Col className="setting_col" >
                <Link style={{ flexDirection: "column" }} >212<div className="setting_word" >收藏夹</div></Link>
            </Col>
            <Col className="setting_col" >
                <Link style={{ flexDirection: "column" }} >333<div className="setting_word" >最近浏览</div></Link>
            </Col>
            <Col className="setting_col" >
                <Link style={{ flexDirection: "column" }} >41<div className="setting_word" >关注</div></Link>
            </Col>
        </Row>
        <List>
            <ListItem title="订单" link="#"></ListItem>
            <ListItem title="订单" link="#"></ListItem>
            <ListItem title="订单" link="#"></ListItem>
        </List>
    </Page>
}

export default connect(({ home: { user } }) => ({ user }))(React.memo(Setting))

