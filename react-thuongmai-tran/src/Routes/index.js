import AdminPage from "../Components/Admin/AdminPage";
import ProfilePage from "../Components/Aoth/Profile/ProfilePage";
import NotFoundPage from "../Components/NotFoundPage";
import Details from "../Components/Patient/Details";
import HomePage from "../Components/Patient/HomePage";
import ProductPage from "../Components/Patient/ProductPage";
import SignInPage from "../Components/Patient/SignInPage";
import SignUpPage from "../Components/Patient/SignUpPage";

// // =============== đường dẫn kết nối tới các trang ==================
export const routes = [
    {
        path: '/',
        page: HomePage,
        isShowHeader: true
    },
    {
        path: '/products',
        page: ProductPage,
        isShowHeader: true
    },
    {
        path: '/details-products/:id',
        page: Details,
        isShowHeader: true
    },
//     {
//         path: '/order',
//         page: OrderPage,
//         isShowHeader: true
//     },
//     {
//         path: '/my-order',
//         page: MyOrderPage,
//         isShowHeader: true
//     },
    
//     {
//         path: '/payment',
//         page: PaymentPage,
//         isShowHeader: true
//     },
//     {
//         path: '/orderSuccess',
//         page: OrderSucess,
//         isShowHeader: true
//     },
//     
//     {
//         path: '/product/:type',
//         page: TypeProductPage,
//         isShowHeader: true
//     },
    {
        path: '/sign-in',
        page: SignInPage,
        isShowHeader: false
    },
    {
        path: '/sign-up',
        page: SignUpPage,
        isShowHeader: false
    },
    {
        path: '/profile-user',
        page: ProfilePage,
        isShowHeader: true
    },
//     {
//         path: '/product-details/:id',
//         page: ProductDetailsPage,
//         isShowHeader: true
//     },
    
    {
        path: '/system/admin',
        page: AdminPage,
        isShowHeader: false,
        isPrivated: true
    },
    { // ===== Trang lỗi 404 =======
        path: '*',
        page: NotFoundPage
    }
]