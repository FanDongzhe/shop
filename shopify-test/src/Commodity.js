import React, { useEffect, useState } from 'react';
import { Avatar, Divider, List, Skeleton } from 'antd';
import InfiniteScroll from 'react-infinite-scroll-component';
import Link from 'antd/es/typography/Link';


const Commodity = () => {
    const [loading, setLoading] = useState(false);

  
    return (
      <div
        id="scrollableDiv"
        style={{
          height: 800,
          overflow: 'auto',
          padding: '0 16px',
          border: '1px solid rgba(140, 140, 140, 0.35)',
        }}
      >
        <InfiniteScroll
          dataLength={10}
          loader={<Skeleton avatar paragraph={{ rows: 1 }} active />}
          endMessage={<Divider plain>It is all, nothing more 🤐</Divider>}
          scrollableTarget="scrollableDiv"
        >
          <List size='small'>
            <List.Item>
                <img src='/shoe1.jpg' width={100}></img>
            </List.Item>
            <List.Item>
                <img src='/shoe2.jpg' width={100}></img>
            </List.Item>
            <List.Item>
                <img src='/shoe3.jpg' width={100}></img>
            </List.Item>
            <List.Item>
                <img src='/shoe1.jpg' width={100}></img>
            </List.Item>
            <List.Item>
                <img src='/shoe2.jpg' width={100}></img>
            </List.Item>
            <List.Item>
                <img src='/shoe3.jpg' width={100}></img>
            </List.Item>
            <List.Item>
                <img src='/shoe1.jpg' width={100}></img>
            </List.Item>
            <List.Item>
                <img src='/shoe2.jpg' width={100}></img>
            </List.Item>
            <List.Item>
                <img src='/shoe3.jpg' width={100}></img>
            </List.Item>
            <List.Item>
                <img src='/shoe1.jpg' width={100}></img>
            </List.Item>
            <List.Item>
                <img src='/shoe2.jpg' width={100}></img>
            </List.Item>
            <List.Item>
                <img src='/shoe3.jpg' width={100}></img>
            </List.Item>
          </List>
        </InfiniteScroll>
      </div>
    );
}

export default Commodity