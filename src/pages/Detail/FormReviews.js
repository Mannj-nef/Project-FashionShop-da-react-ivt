import { Form, Rate } from "antd";
import TextArea from "antd/lib/input/TextArea";
import React from "react";
import { addRating } from "../../apis/ratingApi";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useParams } from "react-router-dom";
import { actGetRatingByFilter } from "../../redux/actions/ratingAction";
import { useDispatch } from "react-redux";

const FormReview = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [form] = Form.useForm();
  const handleSubmit = async (value) => {
    await addRating({ ...value, productId: parseInt(id) });
    toast.success("Bình luận thành công", { autoClose: 2000 });
    form.resetFields();
    dispatch(actGetRatingByFilter({ productId: parseInt(id) }));
  };

  return (
    <>
      <ToastContainer />
      <div className="p-[50px]">
        <h2 className="buyre-name mb-3 text-4xl">{"Manh Quan"}</h2>
        <Form
          layout="vertical"
          onFinish={handleSubmit}
          form={form}
          initialValues={{
            rate: 5,
          }}
        >
          <div className="relative pb-2">
            <Form.Item name="rate" label="Rate">
              <Rate />
            </Form.Item>
          </div>
          <div className="relative pb-2">
            <Form.Item label="Comment" name="comment">
              <TextArea rows={4} />
            </Form.Item>
          </div>
          <div className="text-end">
            <button
              className="submitRating py-[15px] px-[30px] rounded-md"
              type="submit"
            >
              Submit
            </button>
          </div>
        </Form>
      </div>
    </>
  );
};

export default FormReview;
