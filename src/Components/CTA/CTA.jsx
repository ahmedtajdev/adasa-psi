import React from "react";

export default function CTA() {
  return (
    <section className="bg-black p-sec">
      <div className="container">
        <div className="bg-darkgray max-width-900 mx-auto d-flex flex-column align-items-center p-5 rounded-4 border-gray">
          <div className="w-64 h-64 bg-orange d-flex justify-content-center align-items-center rounded-4">
            <i className="fa-regular fa-envelope text-white fs-4"></i>
          </div>
          <h2 className="text-white fs-2 fw-bold mt-4 mb-3">
            اشترك في <span className="text-orange">نشرتنا الإخبارية</span>
          </h2>
          <p className="text-secondary fs-5 mb-4">
            احصل على نصائح التصوير الحصرية ودروس جديدة مباشرة في بريدك
            الإلكتروني
          </p>

          <form className="row align-items-center g-3 w-75 mb-4">

            <div className="col-md-8">
              <input
                type="email"
                className="form-control border-gray bg-darkgray py-3 rounded-4 w-100"
                id="email-input"
                placeholder="أدخل بريدك الالكتروني"
              />
            </div>
						<div className="col-md-4">
							<button
              type="submit"
              className="subscribe-btn navbar-brand text-white fs-sm fw-semibold bg-orange w-25 py-3 rounded-4 me-0 border-0 w-100"
            >
              اشترك الان
            </button>
						</div>
            
          </form>

          <div className="text-secondary">
            انضم لـ <span className="text-white ms-3">+10,000 مصور</span> • بدون إزعاج • إلغاء الاشتراك في أي وقت
          </div>
        </div>
      </div>
    </section>
  );
}
