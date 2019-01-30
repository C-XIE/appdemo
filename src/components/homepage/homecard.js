import React from 'react'
import { Card, CardHeader, CardContent, CardFooter, Icon, PhotoBrowser } from 'framework7-react';



export default class HomeCard extends React.PureComponent {

    handleClickPic = () => {
        this.props.clickPic && this.standaloneDark.open()
    }
    render() {
        return <>
            {
                this.props.data.map((item, index) => {
                    return item ? <Card key={index} >
                        <CardHeader >
                            <div style={{ display: "flex", alignItems: "center" }} >
                                <img
                                    src={`https://loremflickr.com/70/70/people?lock=${item.avatar}`}
                                    style={{ borderRadius: "50%" }}
                                    width="34"
                                    height="34"
                                    alt=""
                                />
                                <span style={{ paddingLeft: "20px" }} >{item.nickname}</span>
                            </div>
                        </CardHeader>
                        <CardContent>
                            <div onClick={() => { this.props.routerdetail && this.props.routerdetail(item.id) }} >
                                {
                                    item.original_pic ?
                                        <>
                                            <PhotoBrowser
                                                photos={[item.original_pic]}
                                                theme="dark"
                                                // type="page"
                                                backLinkText="返回"
                                                ref={(el) => { this.standaloneDark = el }}
                                            />
                                            <img
                                                src={item.original_pic}
                                                width="100%"
                                                alt=""
                                                onClick={this.handleClickPic}
                                            />
                                        </> : null
                                }
                                <p>{item.text}</p>
                            </div>
                        </CardContent>
                        {
                            this.props.footer ? <CardFooter >
                                <div style={{ width: "80px", display: "flex", justifyContent: "space-between" }} >
                                    <Icon f7="thumbs_up" size="18px"></Icon>
                                    <span>{item.like_count}</span>
                                    <Icon f7="compose" size="18px"></Icon>
                                    <span>{item.comment_count}</span>
                                </div>
                            </CardFooter> : null
                        }
                    </Card> : null
                })
            }
        </>
    }
}