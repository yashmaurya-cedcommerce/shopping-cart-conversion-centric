import React from 'react';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';



export default function Home(props) {
    var tempTotal = 0;
    return (
        <div className='homeContainer'>

            <div className='bannerContainer'>

                <div className='bannerTextDiv'>

                    <p className='bannerTextMain'>ONE STOP FOR ALL YOUR CLOTHING NEEDS</p>
                    <p className='bannerTextSub'><i>- Browse Through Our Catalogue To Explore Our Collection</i></p>

                    <div className='bannerBtnDiv'>
                        <a href='#allProductsID' style={{ textDecoration: "none" }}><button className='startShoppingBtn'>Start Shopping <i class="fa-solid fa-circle-arrow-right"></i></button></a>
                        <a href='#groupContainerID'><button className='trendingBtn'>Trending<i class="fa-solid fa-play" style={{ margin: "0% 3%" }}></i></button></a>
                    </div>
                </div>

                <div className='bannerImageDiv'>

                    <img src="/banner4.jpg" alt="" />
                    <div className='imageOverlayText'>
                        <p>
                            <i class="fa-solid fa-quote-left"></i>
                            Get 10% OFF On Entire Summer Collection
                            <i class="fa-solid fa-quote-right"></i>
                        </p>
                    </div>

                    <div className='imageOverlayText2'>
                        <p>
                            <i class="fa-solid fa-quote-left"></i>
                            Get Flat 30% Off On Purchase Of 3 T-Shirts
                            <i class="fa-solid fa-quote-right"></i>
                        </p>
                    </div>

                </div>

            </div>


            <div className='groupContainer' id="groupContainerID">

                <div className='sideImageDiv'>

                    <img src="/side4.jpg" alt="" />

                </div>

                <div className='categoriesDiv'>

                    <h1 className='carouselHeader'>LIMITED TIME DEALS <i class="fa-solid fa-stopwatch"></i></h1>

                    <div id="carouselExampleControls1" className="carousel slide mt-3" data-bs-ride="carousel">

                        <div className="carousel-inner">

                            <div className="carousel-item active">

                                <div class="row">

                                    <div class="colDiv">

                                        <img src="./caro1.jpg" alt="..." /><br />
                                        <p className='productNameCaro'>Tranditional Kurti</p>
                                        <div className='priceDivCaro'>
                                            <p className='mrpCaro'><del>Rs.500</del></p>
                                            <p className='actualPrice'>Rs.300</p>
                                        </div>


                                    </div>

                                    <div class="colDiv">

                                        <img src="./caro2.jpg" alt="..." /><br />
                                        <p className='productNameCaro'>Shrug Blue</p>
                                        <div className='priceDivCaro'>
                                            <p className='mrpCaro'><del>Rs.600</del></p>
                                            <p className='actualPrice'>Rs.450</p>
                                        </div>


                                    </div>

                                    <div class="colDiv">

                                        <img src="./caro3.jpg" alt="..." /><br />
                                        <p className='productNameCaro'>Blue Shirt Women</p>
                                        <div className='priceDivCaro'>
                                            <p className='mrpCaro'><del>Rs.650</del></p>
                                            <p className='actualPrice'>Rs.420</p>
                                        </div>


                                    </div>

                                    <div class="colDiv">

                                        <img src="./duo.jpg" alt="..." /><br />
                                        <p className='productNameCaro'>Rugged Shrugs</p>
                                        <div className='priceDivCaro'>
                                            <p className='mrpCaro'><del>Rs.1000</del></p>
                                            <p className='actualPrice'>Rs.800</p>
                                        </div>


                                    </div>

                                </div>

                            </div>


                            <div className="carousel-item">

                                <div class="row">

                                    <div class="colDiv">

                                        <img src="./caro4.jpg" alt="..." /><br />
                                        <p className='productNameCaro'>Tranditional Kurti</p>
                                        <div className='priceDivCaro'>
                                            <p className='mrpCaro'><del>Rs.500</del></p>
                                            <p className='actualPrice'>Rs.300</p>
                                        </div>


                                    </div>

                                    <div class="colDiv">

                                        <img src="./caro5.jpg" alt="..." /><br />
                                        <p className='productNameCaro'>Shrug Blue</p>
                                        <div className='priceDivCaro'>
                                            <p className='mrpCaro'><del>Rs.600</del></p>
                                            <p className='actualPrice'>Rs.450</p>
                                        </div>


                                    </div>

                                    <div class="colDiv">

                                        <img src="./caro6.jpg" alt="..." /><br />
                                        <p className='productNameCaro'>Blue Shirt Women</p>
                                        <div className='priceDivCaro'>
                                            <p className='mrpCaro'><del>Rs.650</del></p>
                                            <p className='actualPrice'>Rs.420</p>
                                        </div>


                                    </div>

                                    <div class="colDiv">

                                        <img src="./caro7.jpg" alt="..." /><br />
                                        <p className='productNameCaro'>Rugged Shrugs</p>
                                        <div className='priceDivCaro'>
                                            <p className='mrpCaro'><del>Rs.1000</del></p>
                                            <p className='actualPrice'>Rs.800</p>
                                        </div>

                                    </div>

                                </div>

                            </div>


                            <div className="carousel-item">

                                <div class="row">

                                    <div class="colDiv">

                                        <img src="./caro8.jpg" alt="..." /><br />
                                        <p className='productNameCaro'>Rugged Shrugs</p>
                                        <div className='priceDivCaro'>
                                            <p className='mrpCaro'><del>Rs.1000</del></p>
                                            <p className='actualPrice'>Rs.800</p>
                                        </div>


                                    </div>

                                    <div class="colDiv">

                                        <img src="./caro9.jpg" alt="..." /><br />
                                        <p className='productNameCaro'>Rugged Shrugs</p>
                                        <div className='priceDivCaro'>
                                            <p className='mrpCaro'><del>Rs.1000</del></p>
                                            <p className='actualPrice'>Rs.800</p>
                                        </div>


                                    </div>

                                    <div class="colDiv">

                                        <img src="./caro10.jpg" alt="..." /><br />
                                        <p className='productNameCaro'>Rugged Shrugs</p>
                                        <div className='priceDivCaro'>
                                            <p className='mrpCaro'><del>Rs.1000</del></p>
                                            <p className='actualPrice'>Rs.800</p>
                                        </div>


                                    </div>

                                    <div class="colDiv">

                                        <img src="./caro11.jpg" alt="..." /><br />
                                        <p className='productNameCaro'>Rugged Shrugs</p>
                                        <div className='priceDivCaro'>
                                            <p className='mrpCaro'><del>Rs.1000</del></p>
                                            <p className='actualPrice'>Rs.800</p>
                                        </div>

                                    </div>

                                </div>

                            </div>

                        </div>

                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls1" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls1" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>

                    </div>

                </div>

            </div>



            <div className='productsContainer'>

                <div className='mainProductsContainer' id="allProductsID">

                    {props.Data.clothing.map((item, index) => {
                        return (
                            <div className='productDiv' id={index}>

                                <div className='productImage'>

                                    <img src={item.photograph} className='productImage img-fluid' alt="noCloth" />

                                </div>


                                <div className='productDetails'>

                                    <p className='prodName'>{item.name}</p>

                                    <div className='prodPriceDiv'>
                                        <p className='prodMrp'><del>Rs.{item.mrp}</del></p>
                                        <p className='prodPrice'><b>Rs.{item.price}</b></p>
                                    </div>

                                    <div className='prodMaterialDiv'>

                                        <p>Material</p>
                                        <p>{item.material}</p>

                                    </div>


                                </div>

                                <div className='cartButtonDiv'>

                                    <button className='btn addToCartBtn' id={item.id} onClick={(event) => props.addToCart(event)}>Add To Cart<i class="fa-solid fa-cart-arrow-down"></i></button>

                                </div>

                            </div>
                        )
                    })}

                </div>

            </div>




            <SwipeableDrawer open={props.drawerFlag} anchor='bottom' onClose={() => props.closeDrawer()}>

                <div className='cartDiv mt-2' id="cartDivID">

                    <div className='cartTableHeaderDiv'>

                        <h3 className='text-light myCartHeading'>My Cart</h3>
                        <button className='closeCart'><i class="fa-solid fa-xmark" onClick={(event) => props.closeDrawer(event)}></i></button>

                    </div>
                    <div className='mainCart px-2'>



                        {(props.cartArray.length > 0) ? <table className='cartTable' id="cartTableID">
                            <thead>
                                <tr><th>Image</th><th>Name</th><th>Material</th><th>Price</th><th>Quantity</th><th>Total</th></tr>
                            </thead>
                            <tbody>
                                {props.cartArray.map((item, index) => {
                                    { tempTotal = tempTotal + parseInt(item.price) * parseInt(item.quant) }
                                    return (
                                        <tr>

                                            <td className='cartImage'><img src={item.photograph} className="img-fluid my-2" alt="" /></td>
                                            <td className='cartTableProductName'>{item.name}</td>
                                            <td className='cartTableProductMAterial'>{item.material}</td>
                                            <td className='cartTableProductPrice'>{item.price}</td>
                                            <td className='cartTableProductQuant'>
                                                <div className='quantFlex'>
                                                    <p>
                                                        <i className="fa-solid fa-minus quantBtn p-1 mx-2" onClick={(event) => props.decrementQuant(event)} id={index}></i>
                                                    </p>
                                                    <p className=''>
                                                        {item.quant}
                                                    </p>
                                                    <p>
                                                        <i className="fa-solid fa-plus quantBtn p-1 mx-2" onClick={(event) => props.incrementQuant(event)} id={index}></i>
                                                    </p>
                                                </div>
                                            </td>
                                            <td className='cartTableProductTotal'>{item.productTotal}</td>

                                        </tr>
                                    );
                                })}

                                <tr className='totalTr text-light'>
                                    <td>
                                    </td>
                                    <td>
                                    </td>
                                    <td>
                                    </td>
                                    <td>
                                    </td>

                                    <td><b>Total: </b></td>
                                    <td className='py-2'><b>{tempTotal}</b></td>
                                </tr>
                            </tbody>
                        </table> : <div className='emptyCartMsgDiv'><img src="/emptyCart.png" className='emptyGIF' alt="" /><br /><p>Your Cart Is Empty<i class="fa-solid fa-face-sad-tear mx-1"></i></p></div>}
                        {(props.cartArray.length > 0 ? <div className='emptyCartBtnDiv'>
                            <button className='emptyCart btn fw-bold mt-3' onClick={(event) => props.emptyCart(event)} style={{ backgroundColor: "#28110c", color: "white" }}>Empty Cart <DeleteForeverIcon /></button>
                        </div> : '')}

                    </div>


                </div>

            </SwipeableDrawer>


        </div>
    )
}

