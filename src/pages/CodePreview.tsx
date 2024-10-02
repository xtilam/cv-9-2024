import { TimeLineGroup } from "../components/ui/timeline/TimeLineGroup";
import { TimeLineItem } from "../components/ui/timeline/TimeLineItem";

export const CodePreview = () => {
  const { danger: d, primary: p } = getTextColor();
  const image = (name) => <img src={`./images/${name}.png`} className="py-3" />;

  return (
    <div className="container mx-auto mt-6 grid gap-4 py-4 font-medium">
      <TimeLineGroup>
        <TimeLineItem time={["Xử lí lỗi trong JS"]} desc="Sử dụng TypeScript">
          {[
            [
              "Vấn đề",
              <>
                Trong {p("JS")}, khi gọi 1 {p("function")}, ta nhiều khi không thể biết sẽ có những
                {d(" exception ")} nào sẽ được bắn ra
              </>,
              <>
                Nhìn sang {p("Java")}, chúng ta có cơ chế xử lí {d("exception")} mạnh mẽ, 1{" "}
                {p("function")} khi có {d("exception")} thì sẽ buộc phải khai báo ở đầu hoặc xử lí
                try-catch bên trong {p("function")}, {p(" IDE ")} sẽ báo lỗi trong quá trình viết
              </>,
              <>
                Trong {p("JSDocs")} vẫn có {d("@throws")}, nhưng nó cũng không quá hiệu quả
              </>,
              <>
                Ví dụ như trong ứng dụng {p("ExpressJS")}. Nó không phải vấn đề lớn. Bởi{" "}
                {p("middleware")} có thể giúp ta xử lí chuyện đó!
              </>,
              <>
                Nhưng trong ứng dụng {p("automation")}, hay {p("font-end")}, thì việc xử lí lỗi ngay
                sau khi gọi {p("function")} sẽ cần thiết hơn, đặc biệt là khi ứng dụng càng ngày
                càng phức tạp. Phát sinh lỗi mới hay phải xử lí các loại lỗi theo quy trình khác
                nhau. Vậy nên việc xác định các {d(" exception ")} của 1 {p("function")} sẽ trở nên
                cần thiết. Cũng như giúp tách code logic dễ hơn!
              </>,
              <>Em đã xử lí vấn đề đó bằng {p("TypeScript")}, cụ thể như sau:</>,
              image("js-catch-4"),
              <>
                {p("function")} {d("catchException")} sẽ nhận vào 2 tham số, lần lượt là
                {p(" callback")} code logic, và {p("callback")} xác định các
                {d(" exception ")}
                sẽ bắn ra
              </>,
              <>
                {p("Dòng 78")}: Khai báo các {d("exception")} có thể trả về
              </>,
              <>
                Code logic có thể thoải mái bắn {d("exception")} và không phải xử lí chúng bên trong
              </>,
              <>Và kết quả khi {p("connect")} được gọi: </>,
              image("js-catch-5"),
              <>
                {p("TypeScript")} sẽ hiện lên các {d("exception")} có thể bắn. Không cần try-catch.
                Rất tiện lợi!
              </>,
              <>Logic của {d("catchException")}</>,
              <div>
                {image("js-catch-6")} {image("js-catch-7")}
              </div>,
              <>
                Các {d("exception")} như {p("(CLIENT_DESTROYED, NETWORK_ERROR, ...)")} được thừa kế
                từ {d(" BaseError")} và trong {p("prototype")} của các {d("class")} trên kiểu:
                <pre className="bg-secondary-dark !font-medium text-white">
                  {[
                    `class CLIENT_DESTROYED {`,
                    `\tget() CLIENT_DESTROYED(){ return this; }`,
                    `}`,
                  ].join("\n")}
                </pre>
                Vì thế nên khi gọi {d('"error.CLIENT_DESTROYED"')} sẽ có giá trị nếu như có lỗi
              </>,
              <>
                Sẽ có vấn đề ở chỗ {p("callback")} xác định {p("exception")} luôn được khai báo, mặc
                dù chúng không thật sự được thực thi, mục đích chỉ là để xác định kiểu, có thể thật
                sự giải quyết bằng cách thêm {p("generic")} ở phía đầu hàm. Nó sẽ không hề có chi
                phí nào khi cho {p("engine")} khi chạy. Nhưng vì các app automation số lượng{" "}
                {d("exception")} có quá nhiều!. Các {p('"class exception"')} khi tạo ra chúng là 1
                biến nên khi đẩy vào {p("generic")} sẽ phải thêm cú pháp kiểu
                {d(` "typeof CLIENT_DESTROYED"`)}, nó bị hơi dài nên ban đầu em không tính làm nó.
                Cộng thêm việc tạo {d("exception")} từ cách {p("extends")} sẽ dài dòng hơn so với từ
                hàm nên thiết kế đó em không chọn, Cụ thể như sau:
              </>,
              image("js-catch-8"),
            ],
          ]}
        </TimeLineItem>
      </TimeLineGroup>
      {/* <div>
        <h2 className="font-bold text-danger-dark">
          <FontAwesomeIcon icon={faDotCircle} className="mr-2" />
          <span>Xử lí lỗi trong JS (Sử dụng TypeScript)</span>
        </h2>
        <div className="flex gap-2">
          <div>-</div>
          <span>
            Vì trong JS không có cơ chế xử lí lỗi mạnh như {danger(" Java")}, cụ thể, trong {danger(" Java")}, khi 1 {primary('function')}được
            gọi, nếu {primary('function')}đó có bắn ra {danger(" exception ")}, IDE sẽ cảnh báo và buộc chúng ta phải chọn giữa
            việc dùng try-catch block hoặc khai báo ở đầu {primary('function')}rằng {primary('function')}đó sẽ tiếp tục ném ra
            {danger(" exception ")}, bản thân em khá thích tính năng đó của {danger(" Java")}. Nhưng trong JS thì không có hỗ
            trợ chuyện đó. Đúng là trong việc viết web-server như ExpressJS thì nó không phải vấn đề
            quá lớn. Bởi ta sẽ có middleware giúp xử lí {danger(" exception ")} ở điểm cuối của request. Nhưng
            trong desktop app hay ứng dụng automation, việc bắt lỗi ngay khi gọi {primary('function')}sẽ cần thiết
            hơn dần thì việc xác định 1 {primary('function')}có thể bắn ra những lỗi dần trở nên rối rắm. Em đã tự
            viết ra 1 {primary('function')}tiện ích để xử lí chuyện đó
          </span>
        </div>
        <div>- Và đây là thành quả. Nếu connect.error tại property tương ứng sẽ có giá trị</div>
        <img src="./images/js-catch-1.png" alt="" />
        <div>
          - Đây là code bên trong {primary('function')}connect. {primary('function')}catch{danger(" exception ")} sẽ nhận vào 2 tham số, tham số đầu
          là callback logic, tham số thứ 2 là callback xác định những {danger(" exception ")} sẽ bắn ra (sẽ hoàn
          toàn không được gọi). Code logic có thể thoải mái bắn {danger(" exception ")} và cũng dễ viết hơn nhiều
        </div>
        <img src="./images/js-catch-2.png" alt="" /> */}
    </div>
  );
};

let getTextColor = () => {
  const makeColorTextCallback = (color) => (code) => (
    <span className={color + " font-semibold"}>{code}</span>
  );
  const getResult = () => {
    return {
      danger: makeColorTextCallback("text-danger-dark"),
      primary: makeColorTextCallback("text-primary-dark"),
      success: makeColorTextCallback("text-success-dark"),
    };
  };
  getTextColor = getResult;
  return getResult();
};
