import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import './react-tabs.css';

const useStyles = makeStyles(theme => ({
    root: {
        borderRadius: theme.radius,
        boxShadow: theme.purpleShadow,
    },
    tabList: {
        paddingLeft: theme.spacing(4),
        paddingRight: theme.spacing(4),
        backgroundColor: theme.palette.primary.main,
        borderTopLeftRadius: theme.radius,
        borderTopRightRadius: theme.radius
    
    },
    tab: {
        display: "inline-block",
        marginTop: theme.spacing(1),
        borderBottom: "none",
        listStyle: "none",
        padding: `15px 20px`,
        cursor: "pointer",
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        color: "white"
    },
    selectedTab: {
        backgroundColor: "white",
        color: "black"
    },
    panel: {
        display: "block",
        padding: `${theme.spacing(2)}px ${theme.spacing(4)}px` 
    }
}))



export default function TweetTables() {
    const classes = useStyles();
    const tabProps = {
        selectedClassName: classes.selectedTab,
        className: classes.tab,
    }
    return (
        <div className={classes.root}>
        <Tabs>
            <TabList className={classes.tabList}>
                <Tab {...tabProps}>All Tweets</Tab>
                <Tab {...tabProps}>Positive Tweets</Tab>
                <Tab {...tabProps}>Negative Tweets</Tab>
                <Tab {...tabProps}>Neutral Tweets</Tab>
            </TabList>

            <TabPanel selectedClassName={classes.panel}>
                <h2>Any content 1</h2>
            </TabPanel>
            <TabPanel selectedClassName={classes.panel}>
                <h2>Any content 2</h2>
            </TabPanel>
             <TabPanel selectedClassName={classes.panel}>
                <h2>Any content 3</h2>
            </TabPanel>
             <TabPanel selectedClassName={classes.panel}>
                <h2>Any content 4</h2>
            </TabPanel>
        </Tabs>
        </div>
        
    )
}

