import React, { Component } from 'react';
import Navbar from '../Layout/Navbar';

import '../../App.css';

class Detail extends Component {
    render() {
        return (
            <div>
                <Navbar />  
                <div className="container">
                    <div className="detail-product">
                        <div className="detail-header">
                            <div className="product-brand">
                                <p>Starbucks</p>
                            </div>
                            <div className="product-name">
                                <h2>Starbucks Fairtrade DoubleShot Espresso No Added Sugar 100% Arabica Coffee Drink 200ml</h2>
                            </div>
                        </div>
                        <div className="detail-body">
                            <div className="product-img">
                                <img src="https://ssonlineorderingpocsst01.blob.core.windows.net/brandbankimages/5711953079481_512x512" />
                            </div>
                            <div className="product-info">
                                <p className="product-description">
                                    Milk drink with Fairtrade certified Starbucks® Arabica coffee with sweetener.
                                </p>
                                <div className="product-price">
                                    <span className="product-currency">Rp</span>
                                    <span>20.000</span>
                                </div>
                                <div className="add-to-cart">
                                    <button className="btn btn-info">Add to Basket</button>
                                </div>
                                <div className="further-information">
                                    <div className="product-info-label">Product information</div>
                                    <div className="product-view-info">
                                        <h4 className="info-block-head">Ingredients</h4>
                                        <p>
                                        3.3% Fat Milk (75%), Starbucks® Arabica Coffee (Water, Coffee Extract) (25%), Natural Coffee Flavouring, Acidity Regulator (Potassium Carbonate), Sweetener (Acesulfame K), Coffee traded in compliance with Fairtrade Standards, total 99%, excluding Water and Dairy
                                        </p>
                                    </div>
                                    <div className="product-view-info">
                                        <h4 className="info-block-head">Nutritional Value</h4>
                                        
                                        <dl className="infoblock">
                                            <dt className="infoblock-term">Energy</dt>
                                            <dd className="infoblock-definition">505kJ/ 123kcal</dd>
                                            <dt className="infoblock-term">Fat</dt>
                                            <dd className="infoblock-definition">0.7g</dd>
                                            <dt className="infoblock-term">Carbohydrate</dt>
                                            <dd className="infoblock-definition">3g</dd>
                                            <dt className="infoblock-term">Fibre</dt>
                                            <dd className="infoblock-definition">34.2g</dd>
                                            <dt className="infoblock-term">Protein</dt>
                                            <dd className="infoblock-definition">8g</dd>
                                            <dt className="infoblock-term" >Salt</dt>
                                            <dd className="infoblock-definition">0.24g</dd>
                                        </dl>

                                    </div>
                                    <div className="product-view-info">
                                        <h4 className="info-block-head">Country of origin</h4>
                                        <p>
                                            Denmark. Made in Denmark.
                                        </p>
                                    </div>
                                    <div className="product-view-info">
                                        <h4 className="info-block-head">Preparation and usage</h4>
                                        <p>Enjoy cold Shake gently</p>
                                    </div>
                                    <div className="product-view-info">
                                        <h4 className="info-block-head">Storage information</h4>
                                        <p>
                                            Best Before: See base.
                                        </p>
                                    </div>
                                    <div className="product-view-info">
                                        <h4 className="info-block-head">Packaging</h4>
                                        <p>
                                            Can, cylindrical
                                        </p>
                                    </div>
                                    <div className="product-view-info">
                                        <h4 className="info-block-head">Other information</h4>
                                        <p>
                                            Packaged in a protective atmosphere
                                        </p>
                                    </div>
                                    <div className="product-view-info">
                                        <h4 className="info-block-head">Safety information</h4>
                                        <p>
                                            High caffeine content (46mg/100ml).
                                        </p>
                                    </div>
                                    <div className="product-view-info">
                                        <h4 className="info-block-head">Weight</h4>
                                        <p>
                                            200 Millilitre
                                        </p>
                                    </div>
                                    <div className="product-view-info">
                                        <h4 className="info-block-head">Manufacturer</h4>
                                        <p>
                                            Arla Foods Amba, 8260 Viby, DK.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="detail-footer">

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Detail;