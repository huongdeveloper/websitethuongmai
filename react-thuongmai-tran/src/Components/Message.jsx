import { message } from "antd";

// ========= hiện lên thông báo thành công, lỗi, sập nguồn ========
const success = (mes = 'Success') => {
    message.success(mes);
};

const error = (mes = 'Error') => {
    message.error(mes);
};

const warning = (mes = 'Warning') => {
    message.warning(mes);
};

export { success, error, warning }