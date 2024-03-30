// 'use client'
// import React, { useState } from 'react';
// import { message, Upload } from 'antd';
// import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';
// import imageCompression from 'browser-image-compression';
// import type { GetProp, UploadProps } from 'antd';
// import type { RcFile } from 'antd/es/upload/interface';

// const beforeUpload = async (file: RcFile) => {
//    const isImage = file.type === 'image/jpeg' || file.type === 'image/png';
//    if (!isImage) {
//       // Removed specific error message display
//       return false;
//    }

//    const options = {
//       maxSizeMB: 0.1, // Maximum size in MB (0.1 MB)
//       maxWidthOrHeight: 1024, // Maximum width or height
//       useWebWorker: true // Use web workers for faster compression
//    };

//    try {
//       const compressedFile = await imageCompression(file, options);
//       return compressedFile; // Return the compressed file for upload
//    } catch (error) {
//       // Removed specific error handling
//       return false;
//    }
// };

// const UploadImage: React.FC = () => {
//    const [loading, setLoading] = useState(false);
//    const [imageUrl, setImageUrl] = useState<string>();

//    const handleChange: UploadProps['onChange'] = (info) => {
//       if (info.file.status === 'uploading') {
//          setLoading(true);
//          return;
//       }
//       if (info.file.status === 'done') {
//          // Get this url from response in real world.
//          const reader = new FileReader();
//          reader.readAsDataURL(info.file.originFileObj as File);
//          reader.onloadend = () => {
//             setLoading(false);
//             setImageUrl(reader.result as string);
//          };
//       }
//    };

//    const uploadButton = (
//       <button style={{ border: 0, background: 'none' }} type="button">
//          {loading ? <LoadingOutlined /> : <PlusOutlined />}
//          <div style={{ marginTop: 8 }}>Upload</div>
//       </button>
//    );

//    return (
//       <>
//          <Upload
//             name="avatar"
//             listType="picture-card"
//             className="avatar-uploader"
//             showUploadList={false}
//             action="https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188"
//             beforeUpload={beforeUpload}
//             onChange={handleChange}
//          >
//             {imageUrl ? <img src={imageUrl} alt="avatar" style={{ width: '100%' }} /> : uploadButton}
//          </Upload>
//       </>
//    );
// };

// export default UploadImage;
