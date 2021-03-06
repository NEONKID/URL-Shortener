import React, { useState } from 'react';
import { Translation, useTranslation } from 'react-i18next';

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

    const { t } = useTranslation();

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

    // 사이트가 접속이 가능한 URL 인지 확인하는 함수
    const isValidUrl = (url: string) => {
        const CORSFree = 'https://cors-anywhere.herokuapp.com/';
        return new Promise((resolve, reject) => {
            fetch(CORSFree + url)
                .then(res => {
                    resolve(res);
                })
                .catch(err => {
                    reject(err);
                });
        });
    };

    // Create 버튼 클릭 이벤트 함수
    const createBtnClick = () => {
        if (!isUrlString(url)) return;

        toggleModal();
        setTitle('Loading...');

        isValidUrl(url)
            .then((res: any) => {
                if (res.status !== 200) throw new Error(t('invalidURL'));
                return url;
            })
            .then(url => {
                registerUrl(url)
                    .then(res => {
                        if (res.code === Status.SUCCESS) {
                            setTitle(t('success'));
                            setContent(
                                process.env.REACT_APP_API_ENTRYPOINT +
                                    '/' +
                                    res.data.enUrl
                            );
                        } else throw new Error(t('onErrorAPIServer'));
                    })
                    .catch(err => {
                        setTitle(t('failed'));
                        setContent(err.message);
                    });
            })
            .catch(err => {
                setTitle(t('failed'));
                setContent(err.message);
            });
    };

    const toggleModal = () => {
        if (!modalState) {
            setTitle('');
            setContent('');
        }
        setModalState(!modalState);
    };

    const current =
        content === '' ? (
            <progress className="progress is-medium is-info" max="100">
                60%
            </progress>
        ) : (
            content
        );

    return (
        <div className="column is-6 is-offset-3">
            <div className="box">
                <div className="field is-grouped">
                    <p className="control is-expanded">
                        <Translation>
                            {(t, ready) => (
                                <input
                                    aria-label="url"
                                    className="input"
                                    type="text"
                                    placeholder={
                                        ready ? t('inputURL') : 'default'
                                    }
                                    onChange={urlChange}
                                />
                            )}
                        </Translation>
                    </p>
                    <p className="control">
                        <Translation>
                            {(t, ready) => (
                                <a
                                    className="button is-info"
                                    onClick={createBtnClick}
                                >
                                    {ready ? t('createBtn') : 'default'}
                                </a>
                            )}
                        </Translation>
                    </p>
                </div>
                <Modal
                    closeModal={toggleModal}
                    modalState={modalState}
                    title={title}
                >
                    {current}
                </Modal>
            </div>
        </div>
    );
};

export default URLBox;
