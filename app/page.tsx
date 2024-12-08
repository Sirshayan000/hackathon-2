
export default function HOomePage(){
  return(
    <div className="body h-[8479px] w-[1920px] bg-[#0d0d0d]">
        
        {/* header */}
        <div className="h-[950px] w-[1920px]  ">

      
      {/* nav */}
          <div className="h-[87spx] w-[1320px] flex justify-between ml-auto mr-auto mt-[100px]">
               
              
             {/* div-1-sections */}
            <div className="h-[24px] w-[508px] text-[#ffffff] flex justify-between items-center text-base">
               <div className="mt-2">
                  <a className="">Home</a>
                  <div className="h-[7px] w-[7px] bg-[url('/images/orange-dot.png')] bg-cover ml-auto mr-auto"></div>
               </div>
               <a>Menu</a>
               <a>Blog</a>
               <a>Pages</a>
               <div className="flex justify-between items-center">
                  <a>About</a>
                  <div className="h-[14px] w-[14px] bg-[url('/images/drop-icon.png')] bg-cover ml-auto mr-auto"></div>
               </div>
               <a>Shop</a>
               <a>Contact</a>

            </div>

              {/* div-2-logo */}
             <div className="h-[32px] w-[109px] font-bold text-2xl mt-[-45px] mr-[250px]">
               <h1>Food
                 <span className="text-[#FF9F0D]">tuck</span>
               </h1>   
             </div> 

             

             {/* div-3-icons */}
            <div className="h-[54px] w-[350px] flex justify-between items-center">
                <div className="h-[54px] w-[310px] border border-[#FF9F0D] rounded-[27px] flex justify-evenly items-center">
                  <input className="bg-[#0d0d0d] ml-[15px] text-[#ffffff]" type="text" placeholder="Search..." />
                  <div className="h-[24px] w-[24px] mr-[15px] bg-[url('/images/magni.png')] bg-cover"></div>
                </div>
                <div className="h-[24px] w-[24px] bg-[url('/images/shop.png')] bg-cover"></div>

            </div>

             {/* nav */}
          </div>
       
       {/* below-the-nav */}
       <div className="flex ">
       {/* div-1 */}
         <div className="ml-[245px] mt-[100px] h-[492px] w-[520px] flex justify-between items-center ">
             <div className="h-[492px] w-[25.28px] 
                 bg-[url('/images/social-acc.png')] bg-cover">
             </div>

             <div className="h-[356px] w-[472px] ">
                <div className="h-[40px] w-[249px]
                   bg-[url('/images/cur-writing.png')] bg-cover">
                </div>
                <h1 className="h-[136px] w-[499px] font-bold text-[60px]">
                  <span className="text-[#FF9F0D]">Th</span>e Art of speed food Quality
                </h1>
                <p className="h-[48px] w-[418px] mt-[70px] font-normal text-[16px]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Varius sed pharetra dictum neque massa congue
                </p>
                <button className=" mt-[70px] h-[60px] w-[190px] bg-[#ff9d0d] rounded-[27px]">
                  See Menu
                </button>

             </div>

         </div>

         {/* div-2 */}
         <div className="h-[670px] w-[877.7px] mt-[150px] ml-[200px]
                 bg-[url('/images/hero-img.png')] bg-cover">
         </div>

         {/* below */}
      </div>

          {/* header */}
        </div>
{/* 
-------------------------------------------------------------------------------------------------
        container-2 -food-products */}
        
      <div className="h-[562px] w-[1320px] flex justify-between ml-[295px] mt-[300px]">

          {/* div-1 */}
          <div className="h-[562px] w-[562px]">

              <div className="h-[40px] w-[91px] bg-[url('/images/cur-writing-2.png')] bg-cover"></div>
              <h1 className="h-[136px] w-[499px] font-bold text-[48px]">
                  <span className="text-[#FF9F0D]">We</span>Create the best foody product
              </h1>      
              <p className="h-[48px] w-[526px] mt-[50px] font-normal text-[16px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit augue urna, vitae feugiat pretium donec id elementum. Ultrices mattis sed vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in consequat.
              </p>

              <div className="h-[18px] w-[526px] mt-[100px] flex items-center font-normal text-[18px]">
                  <div className="h-[12.24px] w-[17px] bg-[url('/images/tick.png')] bg-cover"> </div> 
                  <p className="ml-[10px]"> Lacus nisi, et ac dapibus sit eu velit in consequat.</p>
              </div>      
              
              <div className="h-[18px] w-[566px] mt-[40px] flex items-center font-normal text-[18px]">
                  <div className="h-[12.24px] w-[17px] bg-[url('/images/tick.png')] bg-cover"> </div> 
                  <p className="ml-[10px]"> Quisque diam pellentesque bibendum non dui volutpat fringilla </p>
              </div>  

              <div className="h-[18px] w-[526px] mt-[40px] flex items-center  font-normal text-[18px]">
                  <div className="h-[12.24px] w-[17px] bg-[url('/images/tick.png')] bg-cover"> </div> 
                  <p className="ml-[10px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
              </div>  

              <button className=" mt-[40px] h-[60px] w-[190px] bg-[#ff9d0d] rounded-[27px]">
                  Read More
               </button>
              
          </div>

          {/* div-2 */}
          <div className="h-[526px] w-[660px]">

             <div className="h-[330px] w-[660px] bg-[url('/images/food-pro-1.png')] bg-cover"></div>
 
             <div className="h-[194px] w-[660px] flex justify-between mt-[20px]">
               <div className="h-[194px] w-[322px] bg-[url('/images/food-pro-2.png')] bg-cover"></div>   
               <div className="h-[194px] w-[322px] bg-[url('/images/food-pro-3.png')] bg-cover"></div>
            </div>

          </div>

      </div>

{/* 
-------------------------------------------------------------------------------------------------
        container-3 -food-items */}
      <div className="h-[489px] w-[1320px]  mt-[200px] ml-auto mr-auto">
                {/* div-1 */}
          <div className="h-[40px] w-[177px] bg-[url('/images/cur-writing-3.png')] bg-cover ml-auto mr-auto"></div>
          <h1 className="h-[56px] w-[496px] font-bold text-[48px] ml-auto mr-auto">
                  <span className="text-[#FF9F0D]">Ch</span>oose Food Iteam
          </h1>

                {/* div-2 */}
          <div className="h-[329px] w-[1320px] flex justify-between mt-[65px]">
             <div className="h-[328px] w-[305px] bg-[url('/images/food-it-1.png')] bg-cover">
                 <div className="h-[97px] w-[206px] bg-[url('/images/dis-food-it.png')] bg-cover mt-[110px]"></div>
             </div>
             <div className="h-[328px] w-[305px] bg-[url('/images/food-it-2.png')] bg-cover"></div>
             <div className="h-[328px] w-[305px] bg-[url('/images/food-it-3.png')] bg-cover"></div>
             <div className="h-[328px] w-[305px] bg-[url('/images/food-it-4.png')] bg-cover"></div>

          </div>

      </div>

 {/* 
-------------------------------------------------------------------------------------------------
        container-3 -food-items */}

































{/* ----------------------------------------------------------------------- */}
{/* 
        container-2
        SOICAL MEDIA        */}
        {/* <div className="w-[216px] h-[24px] flex justify-between items-center mt-[60px] ml-[700px]">
           <div className="w-[24px] h-[24px] bg-[url('/images/social-1.png')] bg-cover"></div>
           <div className="w-[24px] h-[24px] bg-[url('/images/social-2.png')] bg-cover"></div>
           <div className="w-[24px] h-[24px] bg-[url('/images/social-3.png')] bg-cover"></div>
           <div className="w-[24px] h-[24px] bg-[url('/images/social-4.png')] bg-cover"></div>
           <div className="w-[24px] h-[24px] bg-[url('/images/social-5.png')] bg-cover"></div>
           
        </div>      


{/* 
        container-3
        items        */}
        {/* <div className="w-[312px] h-[382px] mt-[60px] ml-[700px]">
           <div className="w-[312px] h-[312px] bg-[url('/images/cheif-1.png')] bg-cover"></div>
           <div className="text-center mt-[10px]">
             <h4 className="font-bold text-lg">Bulbul Hassan</h4>
             <p className="font-normal text-base mt-[7px]">Chef</p>
           </div>
        </div>       


        <div className="w-[443px] h-[98px] mt-[60px] ml-[700px] flex justify-between">
           <div className="w-[100px] h-[98px] bg-[url('/images/coffee-icon.png')] bg-cover"></div>
           <div>
              <h3 className="h-[32px] w-[225px] font-bold text-2xl">High quality coffee</h3>
              <p className="h-[48px] w-[331px] font-normal text-base mt-[7px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Leo augue nibh .</p>
           </div>

        </div>
  */}

        {/* <div className="w-[312px] h-[446px] mt-[60px] ml-[700px]">
           <div className="w-[312px] h-[379.17px] bg-[url('/images/cheif-2.png')] bg-cover"></div>
           <div className="text-center mt-[10px]">
             <h4 className="font-bold text-lg">Tahmina Rumi</h4>
             <p className="font-normal text-base mt-[7px]">Chef</p>
           </div>
        </div>
  */}



{/* body */}
    </div>
  )
}