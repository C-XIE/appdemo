import React from 'react'
import Artile from './artile'
import { Page, Toolbar, Link, Tabs, Tab } from 'framework7-react';
import Setting from '../setting/setting'

export default React.memo(function HomePage(props) {
    return < Page  >
        <Toolbar tabbar>
            <Link tabLink="#tab-1" >学术</Link>
            <Link tabLink="#tab-2">发现</Link>
            <Link tabLink="#tab-3" tabLinkActive  >我的</Link>
        </Toolbar>
        <Tabs>
            <Tab id="tab-1" >
                <Artile f7router={props.f7router} ></Artile>
            </Tab>
            <Tab id="tab-2"   >
                <Artile f7router={props.f7router} ></Artile>
            </Tab>
            <Tab id="tab-3" tabActive  >
                <Setting f7router={props.f7router} ></Setting>
            </Tab>
        </Tabs>
    </Page >
})