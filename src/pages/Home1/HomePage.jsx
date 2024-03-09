const HomePage = () => {
  return (
    <div>
      {/* section 1 */}
      <div>
        <div className="bg-gray-100 text-center py-2">
          <a className="text-md font-light">
            Move, Shop, Customise &amp; Celebrate With Us
          </a>
          <p className="text-xs">
            No matter what you feel like doing today, It's better as a Member.
          </p>
          <a className="font-light underline text-xs pt-5" href="#">
            Join Us
          </a>
        </div>
        <div className="mx-10">
          <img
            src="https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/w_1329,c_limit/2db1f7bc-191f-4080-b619-9f5880a07170/nike-just-do-it.jpg"
            alt=""
          />
        </div>
        <div className="text-center my-10">
          <a className="font-semibold">Nike Bras and Legging</a>
          <h3 className="font-extrabold text-7xl">FIND YOUR FEEL</h3>
          <p className="font-normal text-gray-500 mt-6 px-40">
            HIIT the gym with locked-in support and next-level confidence. Enjoy
            your rest day or simply chill in the softest flexibility imaginable.
            From working out to pressing pause, Nike bras and leggings are the
            essential foundation for your day - no matter what life throws your
            way.
          </p>
          <button className="" />
        </div>
      </div>
      {/* section 4 */}
      <div>
        <div className="mx-10">
          <a className="text-2xl">Always Iconic</a>
        </div>
        <div className="mx-7 mt-7 flex flex-row">
          <div className="mx-3 basis-1/4">
            <img
              src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/437840c0-29b2-490b-85aa-5fcc60b513fa/air-force-1-07-lv8-shoes-lPdFPQ.png"
              alt=""
            />
          </div>
          <div className="mx-3 basis-1/4">
            <img
              src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/3d280b47-f5cb-418b-b4a3-0299b18c442f/air-force-1-07-lx-shoes-SGsVWx.png"
              alt=""
            />
          </div>
          <div className="mx-3 basis-1/4">
            <img
              src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/2ac13af1-73e6-44a8-b3b4-5514c2bc57bc/air-force-1-07-next-nature-shoes-nCJ6Wb.png"
              alt=""
            />
          </div>
          <div className="mx-3 basis-1/4">
            <img
              src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/a42a5d53-2f99-4e78-a081-9d07a2d0774a/air-force-1-07-shoe-HWWX9W.png"
              alt=""
            />
          </div>
        </div>
      </div>
      {/* Section 5 */}
      <div className="mt-20">
        <div className="mx-10">
          <a className="text-2xl">Shop by Sport</a>
        </div>
        <div className="mx-7 mt-7 flex flex-row">
          <div className="mx-3 basis-1/3 flex flex-col">
            <img
              src="https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/w_679,c_limit/a51d84b2-282a-44d6-957d-aa57473ed73d/nike-just-do-it.jpg"
              alt=""
            />
            <a className="text-xl my-3">Nike Basketball</a>
            <a className="text-base">Style Mad For Your Game</a>
            <a className="underline text-base pt-10" href="#">
              Shop
            </a>
          </div>
          <div className="mx-3 basis-1/3 flex flex-col">
            <img
              src="https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/w_679,c_limit/0376dfa6-a2d7-4867-bd13-4b8e465705c1/nike-just-do-it.jpg"
              alt=""
            />
            <a className="text-xl my-3">Nike Golf</a>
            <a className="text-base">Style Mad For Your Game</a>
            <a className="underline text-base pt-10" href="#">
              Shop
            </a>
          </div>
          <div className="mx-3 basis-1/3 flex flex-col">
            <img
              src="https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/w_679,c_limit/3df1f8e5-5ece-4e81-87e6-f8a30c8a3fab/nike-just-do-it.jpg"
              alt=""
            />
            <a className="text-xl my-3">Nike Trail</a>
            <a className="text-base">Style Mad For Your Game</a>
            <a className="underline text-base pt-10" href="#">
              Shop
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default HomePage;
