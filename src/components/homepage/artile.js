import React from 'react'
import HomeCard from './homecard'
import { Navbar, Page } from 'framework7-react';
import axios from 'axios'
import { connect } from 'react-redux'

const nav = ["关注", "推荐", "热门"]


class Artile extends React.PureComponent {
    state = {
        select: 1,
        data: [],
        allowInfinite: true
    }
    changeselect = select => {
        this.setState({ select })
    }
    componentDidMount() {
        this.props.dispatch({ type: "initlist" })
    }
    routerdetail = (id) => {
        this.props.f7router.navigate(`/detail?id=${id}`)
    }
    getContent = () => {
        switch (this.state.select) {
            case 0:
                return <HomeCard data={[]} ></HomeCard>
            case 1:
                return <HomeCard
                    routerdetail={this.routerdetail}
                    data={this.props.list}
                    clickPic={false}
                    footer={true}
                ></HomeCard>
            default:
                return <HomeCard data={[]} ></HomeCard>
        }
    }
    loadMore = async () => {
        if (!this.state.allowInfinite) return
        this.setState({ allowInfinite: false })
        this.props.dispatch({ type: "loadmore" })
    }
    componentDidUpdate(prevProps) {
        if (prevProps.list.length !== this.props.list.length) {
            !this.props.allowInfinite && this.setState({ allowInfinite: true })
        }
    }
    preloadMore = (e, done) => {
        axios.get("/refresh_timeline.json")
            .then(response => {
                this.props.dispatch({ type: "preloadmore_success", data: response.data })
                done()
            })
    }
    render() {
        return <Page
            infinite
            infiniteDistance={50}
            infinitePreloader={true}
            onInfinite={this.loadMore}
            ptr
            onPtrRefresh={this.preloadMore}
        >
            <Navbar className="specNavBar" sliding >
                <div style={{
                    display: "flex",
                    width: "100vw",
                    justifyContent: "space-around",
                    fontSize: "18px",
                    height: "40px"
                }} >
                    {
                        nav.map((item, index) => {
                            return <div
                                key={index}
                                onClick={() => { this.changeselect(index) }}
                                style={{
                                    height: "100%",
                                    boxSizing: "border-box",
                                    display: "flex",
                                    alignItems: "center",
                                    cursor: "pointer",
                                    color: index === this.state.select ? "#9900FF" : "black",
                                    borderBottom: `2px solid ${index === this.state.select ? "#9900FF" : "white"}`
                                }}
                            >{item}</div>
                        })
                    }
                </div>
            </Navbar>
            {this.getContent()}
        </Page >
    }
}

export default connect(({ home: { list } }) => ({ list }))(Artile)