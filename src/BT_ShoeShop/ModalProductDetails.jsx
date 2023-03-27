import React from "react";

const ModalProductDetails = ({ product, isOpen, onClose }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <>
      <div
        className="modal fade show"
        style={{ display: "block" }}
        tabIndex={-1}
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Thông tin chi tiết</h5>
              <button className="btn-close" onClick={onClose} />
            </div>
            <div className="modal-body">
              <div className="mt-3 ">
                <div className="text-center w-full">
                  <img
                    src={product?.image}
                    alt={product?.name}
                    width="300px"
                    height="300px"
                  />
                </div>
                <div className=" d-flex flex-column gap-3">
                  <div className="d-flex align-items-center gap-1">
                    <p className="fw-bold">Tên:</p>
                    <p>{product.name}</p>
                  </div>
                  <div className="d-flex gap-1">
                    <p className="fw-bold" style={{ width: 140 }}>
                      Nội dung:
                    </p>
                    <p>{product.description}</p>
                  </div>
                  <div className="d-flex align-items-center gap-1">
                    <p className="fw-bold">Giá:</p>
                    <p>{product.price}$</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button className="btn btn-secondary" onClick={onClose}>
                Đóng
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="modal-backdrop fade show" />
    </>
  );
};

export default ModalProductDetails;
