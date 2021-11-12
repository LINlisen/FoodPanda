import React, { useState, useEffect } from 'react';
import { List, message, Avatar, Skeleton, Divider,Button,Modal, AutoComplete } from 'antd';
import InfiniteScroll from 'react-infinite-scroll-component';
export default function ServiceClientList(){
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState([]);
    const [isModalVisible, setIsModalVisible] = useState(false);
    const loadMoreData = () => {
      if (loading) {
        return;
      }
      setLoading(true);
      fetch('https://randomuser.me/api/?results=10&inc=name,gender,email,nat,picture&noinfo')
        .then(res => res.json())
        .then(body => {
          setData([...data, ...body.results]);
          setLoading(false);
        })
        .catch(() => {
          setLoading(false);
        });
    };
    const showModal = () => {
        setIsModalVisible(true);
      };
    
      const handleOk = () => {
        setIsModalVisible(false);
      };
    
      const handleCancel = () => {
        setIsModalVisible(false);
      };
    useEffect(() => {
        loadMoreData();
      }, []);
      return(
        <div
        id="scrollableDiv"
        style={{
          width:700,
          height: 400,
          overflow: 'auto',
          padding: '0 16px',
          border: '1px solid rgba(140, 140, 140, 0.35)',
          marginTop:'10px',
          marginInline:'auto'
        }}
      >
        <InfiniteScroll
          dataLength={data.length}
          next={loadMoreData}
          hasMore={data.length < 50}
          loader={<Skeleton avatar paragraph={{ rows: 1 }} active />}
          endMessage={<Divider plain>It is all, nothing more 🤐</Divider>}
          scrollableTarget="scrollableDiv"
        >
          <List
            dataSource={data}
            renderItem={item => (
              <List.Item key={item.id}>
                <List.Item.Meta
                  avatar={<Avatar src={item.picture.large} />}
                  title={<a href="https://ant.design">{item.name.last}</a>}
                  description={item.email}
                />
                <div>
                <Button type="primary" onClick={showModal}>
                    Content
                </Button>
                <Modal
                 title="問題內容"
                 visible={isModalVisible}
                 onOk={handleOk}
                 onCancel={handleCancel}
                 footer={[
                    <Button key="delete">
                      刪除
                    </Button>,
                    <Button key="finish" type="primary" loading={loading} >
                      完成
                    </Button>,
                    <Button key="contact">
                     聯絡客人
                    </Button>,
                  ]}>
                    <p>餐點有誤</p>
                </Modal>
                </div>
              </List.Item>
            )}
          />
        </InfiniteScroll>
      </div>
      )
}