# Bài tập lớn (Lập trình WWW) - FE
## Đề bài:
### Website văn phòng phẩm online
Yêu cầu của các đề tài 01 50, chức năng tối thiểu:
 Website bao gồm 3 loại người dùng tương tác: người dùng không có tài khoản (guest), người dùng
có tài khoản (customer), người quản trị hệ thống (admin).
 Người dùng không có tài khoản (guest) có các chức năng:
o Có thể đăng ký tài khoản của website với các thông tin cần thiết (email không trùng với tài
khoản khác), sau khi đăng ký thành công với thông tin hợp lệ, lưu trữ CSDL + gửi email
+ thông báo về tài khoản.
o Xem danh sách sản phẩm (thiết bị máy tính, mỹ phẩm, quần áo ... tùy theo đề tài, danh sách
này lấy từ CSDL)
o Xem chi tiết của từng sản phẩm từ danh sách sản phẩm.
o Chọn mua từng sản phẩm (có thể chọn mua từ trang Web danh sách sản phẩm hay từ trang
Web chi tiết của từng sản phẩm), sản phẩm sau khi chọn mua sẽ được đưa vào trong giỏ
hang, nếu chọn sản phẩm đã có trong giỏ hàng, cập nhật số lượng.
o Xem giỏ hàng (danh sách sản phẩm đã chọn mua, thông tin này lưu trong biến Session,
không cần cập nhật CSDL).
o Khi xem giỏ hàng, có thể chỉnh sửa số lượng của từng sản phẩm trong giỏ hàng (nếu chỉnh
sửa số lượng là 0  bỏ sản phẩm đó ra khỏi giỏ hàng)
Khoa Công nghệ thông tin – Đại học Công nghiệp TP. Hồ Chí Minh 9
 Người dùng có tài khoản (customer) có thể thực hiện các chức năng của Người dùng không có tài
khoản (guest), ngoài ra người dùng có tài khoản (customer) còn có thể:
o Xử lý thanh toán (chức năng này thực hiện khi giỏ hàng đã có sản phẩm và người dùng
đăng nhập thành công vào hệ thống): cập nhật thông tin vào CSDL + gửi email + thông
báo đăng ký đặt hàng thành công với các thông tin kèm theo. Sau khi xử lý thành công,
Session được xóa về null.
 Người quản trị hệ thống (admin) có thể thực hiện được chức năng như một người dùng có tài
khoản (customer). Ngoài ra, chức năng khác dành cho người quản trị hệ thống (admin) - Phần
Back-End:
o Tìm kiếm thông tin về sản phẩm/loại sản phẩm, các đơn đặt sản phẩm.
o Quản lý thông tin sản phẩm/loại sản phẩm:
 Xem danh sách sản phẩm/loại sản phẩm.
 Xem chi tiết từng sản phẩm/loại sản phẩm.
 Xóa sản phẩm/loại sản phẩm trong trường hợp sản phẩm chưa có trong đơn hàng
nào hoặc loại sản phẩm chưa có sản phẩm nào.
 Thêm mới, cập nhật thông tin sản phẩm/loại sản phẩm.
o Quản lý thông tin đơn hàng trực tuyến:
 Xem danh sách các đơn hàng (sắp xếp theo ngày mua)
 Xem chi tiết đơn hàng.
 Cập nhật số lượng của mặt hàng trong đơn hàng trực tuyến
 Lưu ý cho các chức năng quản lý thông tin:
o Ràng buộc khi xóa dữ liệu (tiêu chí ràng buộc SV cần định nghĩa phù hợp)
o Trường hợp thêm hay cập nhật dữ liệu có thể kiểm tra phía Client bằng JavaScript/jQuery
hoặc kiểm tra bằng Model phía Server, không dùng Functions/Check constraints/Stored
Procedures trong hệ quản trị CSDL nếu dùng ORM.
## Thành viên:
### Đặng Lê Minh Trường
### Nguyễn Quốc Duy

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
