import React, { useState } from 'react';
import axios from 'axios';

import Modal from './Modal';
import { registerUrl } from '../../../server/urlRegister';

enum Status {
    SUCCESS = 1
}

const URLBox = () => {
    const [modalState, setModalState] = useState(false);
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [url, setUrl] = useState('');

    // URL 인지 확인하는 함수
    const isUrlString = (url: string) => {
        return (
            /^(http|https):\/\/[^ "]+$/.test(url) &&
            url !== null &&
            url !== undefined &&
            url !== ''
        );
    };

    // URL 입력 칸 이벤트 함수
    const urlChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const url = e.target.value;
        setUrl(url);
    };

    // 사이트가 접속이 가능한 URL인지 확인하는 함수
    const isValidUrl = (url: string) => {
        const CORSFree = 'https://cors-anywhere.herokuapp.com/';
        axios
            .get(CORSFree + url)
            .then(res => {
                if (res.status === 200) return true;
                else {
                    setTitle('FAILED');
                    setContent(res.status.toString());
                    return false;
                }
            })
            .catch(err => {
                setTitle('FAILED');
                setContent(err.message);
                return false;
            });
        return false;
    };

    // Create 버튼 클릭 이벤트 함수
    const createBtnClick = () => {
        if (!isUrlString(url)) return;
        if (!isValidUrl(url)) return;

        registerUrl(url)
            .then(res => {
                if (res.code === Status.SUCCESS) {
                    setTitle('SUCCESS');
                    setContent(res.data.enUrl);
                } else {
                    setTitle('FAILED');
                    setContent(res.data);
                }
            })
            .catch(err => {
                setTitle('FAILED');
                setContent(err.message);
            })
            .finally(() => {
                toggleModal();
            });
    };

    const toggleModal = () => {
        setModalState(!modalState);
    };

    return (
        <div className="box">
            <div className="field is-grouped">
                <p className="control is-expanded">
                    <input
                        className="input"
                        type="text"
                        placeholder="Enter URL"
                        onChange={urlChange}
                    />
                </p>
                <p className="control">
                    <a
                        className="button is-info"
                        onClick={() => {
                            createBtnClick();
                        }}
                    >
                        Create
                    </a>
                </p>
            </div>
            <Modal
                closeModal={toggleModal}
                modalState={modalState}
                title={title}
            >
                {content}
            </Modal>
        </div>
    );
};

export default URLBox;
