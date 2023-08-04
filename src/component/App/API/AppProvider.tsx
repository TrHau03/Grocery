import React, {createContext} from 'react'
import AxiosInstance from '../../Axios/AixosInstance';

export const AppContext = createContext({});

export const AppProvider = (props:any) =>{
    const {children} = props;
    const getAllProduct :any  = async() =>{
        try {
            const result = await AxiosInstance().get('/product/getAll');
            return result;
        } catch (error) {
            console.log('getNews Error: ' ,error);
        }
        return [];
    }
    // //get infor chi tiết bài viết
    // const getDetail = async(id) =>{
    //     try {
    //         const response = await AxiosInstance().get(`/product/getProductByID/${id}`);
    //         console.log("response:",response);
    //         return response.data.product;
    //     } catch (error) { 
    //         console.log('get detail Error: ' ,error);
    //     }
    //     return null;
    // }
    // const getDataByCate = async(id) =>{
    //     try {
    //         const response = await AxiosInstance().get(`/product/getProductByCate/${id}`);
    //         console.log("response:",response.data.product);
    //         return response.data.product;
    //     } catch (error) { 
    //         console.log('get detail Error: ' ,error);
    //     }
    //     return null;
    // }
    // const getCate = async() =>{
    //     try {
    //         const response = await AxiosInstance().get('/product/get-allCategory');
    //         console.log("response:",response);
    //     return response.data.cate;
    //     } catch (error) {
    //         console.log('getUpload Error: ' ,error);
    //     }
    //     return null;
    // }

    // //Lưu bài viết
    // const saveNews = async(title, content, image) =>{
    //     try {
    //         const body = {
    //             title: title,
    //             content: content,
    //             image: image,
    //         }
    //         console.log(body);
    //         const response =  await AxiosInstance().post('/articles', body);
    //         return true;
    //     } catch (error) {
    //         console.log('SaveNews: ' , error)
    //     }
    //     return false;
    // }
    return (
        <AppContext.Provider 
            value = {{getAllProduct}}>
            {children}
        </AppContext.Provider>
    )
}