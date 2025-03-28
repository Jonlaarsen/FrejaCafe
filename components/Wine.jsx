import React from "react";

const Wine = () => {
  return (
    <>
      <div className="h-full w-full grid grid-cols-3 pt-10">
        <div className="flex-col h-full">
          <div className="w-full h-full bg-[url('/wine.png'),_url('/outside.png')] bg-fixed bg-no-repeat"></div>
        </div>
        <div className="w-full h-full flex">
          <h1 className="h-[100vh]">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet
            aspernatur est corporis repudiandae, praesentium rem ipsum animi
            ullam dolores reiciendis dicta harum explicabo enim adipisci tenetur
            temporibus, et, iusto culpa!
          </h1>
        </div>
        <div className="w-full h-full flex">
          <h1 className="h-screen">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet
            aspernatur est corporis repudiandae, praesentium rem ipsum animi
            ullam dolores reiciendis dicta harum explicabo enim adipisci tenetur
            temporibus, et, iusto culpa!
          </h1>
        </div>
      </div>
      <div className="h-full w-full grid grid-cols-3 pt-10">
        <div className="w-full h-full flex">
          <h1 className="h-">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet
            aspernatur est corporis repudiandae, praesentium rem ipsum animi
            ullam dolores reiciendis dicta harum explicabo enim adipisci tenetur
            temporibus, et, iusto culpa!
          </h1>
        </div>
        <div className="w-full h-full flex">
          <h1 className="h-screen">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet
            aspernatur est corporis repudiandae, praesentium rem ipsum animi
            ullam dolores reiciendis dicta harum explicabo enim adipisci tenetur
            temporibus, et, iusto culpa!
          </h1>
        </div>
        <div className="flex-col w-full h-full">
          <div className="w-full h-full bg-[url('/wine.png')] bg-fixed bg-right bg-no-repeat"></div>
        </div>
      </div>
    </>
  );
};

export default Wine;
