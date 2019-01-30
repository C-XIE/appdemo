import React, { useEffect } from 'react'
import { Page, Navbar, List, ListItem } from 'framework7-react';
import { connect } from 'react-redux'
import HomeCard from '../homepage/homecard'


function HomePage(props) {
    const id = props.f7route.query.id || null

    useEffect(() => {
        id !== null && props.dispatch({ type: "getcomments", id })
    }, [])
    return (
        <Page >
            <Navbar title="详情" backLink=" " sliding />
            <HomeCard
                routerdetail={null}
                data={[props.list.find(item => item.id === id)]}
                clickPic={true}
                footer={false}
            ></HomeCard>
            <List mediaList>
                {
                    props.comments.map((item, index) => {
                        return <ListItem
                            title={item.name}
                            // subtitle={item.time}
                            text={item.text}
                            key={index}
                        >
                            <img
                                slot="media"
                                src={`https://loremflickr.com/70/70/people?lock=${item.avatar}`}
                                style={{ borderRadius: "50%" }}
                                width="30"
                                alt=""
                            />
                        </ListItem>
                    })
                }
            </List>
        </Page>
    )
}
export default connect(({ home: { list, comments } }) => ({ list, comments }))(React.memo(HomePage))