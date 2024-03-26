import React from 'react';
import './style.css';
import { CiCircleRemove } from 'react-icons/ci';
import { FaCheck } from 'react-icons/fa';
import Titles from '@/app/commonUl/Titles';
export default function ChoosePlan() {
	return (
		<>
			<div>
				<Titles level={2} color="PrimaryColor" className="textCenter">
					Compare Our Plans
				</Titles>
				<section className="pricing-plans">
					<div className="pricing-card basic">
						<div className="heading">
							<h4>FREE</h4>
							<p>for small websites or blogs</p>
						</div>
						<p className="price">
							$0
							<sub>/month</sub>
						</p>
						<ul className="features">
							<li>
								<CiCircleRemove />
								<strong>1 domain</strong> name
							</li>
							<li>
								<FaCheck />
								<strong>10 GB</strong> of disk space
							</li>
							<li>
								<CiCircleRemove />
								<strong>100GB </strong>of bandwidth
							</li>
							<li>
								<FaCheck />
								<strong>1 MySQL</strong> database
							</li>
							<li>
								<CiCircleRemove />
								<strong>5 email</strong> accounts
							</li>
							<li>
								<CiCircleRemove />
								<strong>cPanel</strong> control panel
							</li>
							<li>
								<FaCheck />
								<strong>Free SSL</strong> certificate
							</li>
							<li>
								<CiCircleRemove />
								<strong>24/7</strong> support
							</li>
						</ul>
						<button className="cta-btn">Try Now</button>
					</div>
					<div className="pricing-card standard">
						<div className="heading">
							<h4>BASIC</h4>
							<p>for medium-sized businesses</p>
						</div>
						<p className="price">
							$59
							<sub>/month</sub>
						</p>
						<ul className="features">
							<li>
								<CiCircleRemove />
								<strong>Unlimited</strong> domain name
							</li>
							<li>
								<FaCheck />
								<strong>50 GB</strong> of disk space
							</li>
							<li>
								<CiCircleRemove />
								<strong>500GB </strong>of bandwidth
							</li>
							<li>
								<FaCheck />
								<strong>10 MySQL</strong> database
							</li>
							<li>
								<CiCircleRemove />
								<strong>50 email</strong> accounts
							</li>
							<li>
								<FaCheck />
								<strong>cPanel</strong> control panel
							</li>
							<li>
								<CiCircleRemove />
								<strong>Free SSL</strong> certificate
							</li>
							<li>
								<FaCheck />
								<strong>24/7</strong> support
							</li>
						</ul>
						<button className="cta-btn">Buy Now</button>
					</div>
					<div className="pricing-card premium">
						<div className="heading">
							<h4>PREMIUM</h4>
							<p>for small businesses</p>
						</div>
						<p className="price">
							$349
							<sub>/month</sub>
						</p>
						<ul className="features">
							<li>
								<FaCheck />
								<strong>Unlimited</strong> domain name
							</li>
							<li>
								<FaCheck />
								<strong>100 GB</strong> of disk space
							</li>
							<li>
								<FaCheck />
								<strong>1TB </strong>of bandwidth
							</li>
							<li>
								<FaCheck />
								<strong>Unlimited MySQL</strong> database
							</li>
							<li>
								<FaCheck />
								<strong>Unlimited email</strong> accounts
							</li>
							<li>
								<FaCheck />
								<strong>cPanel</strong> control panel
							</li>
							<li>
								<FaCheck />
								<strong>Free SSL</strong> certificate
							</li>
							<li>
								<FaCheck />
								<strong>24/7 priority</strong> support
							</li>
							<li>
								<FaCheck />
								<strong>Advanced</strong> security features
							</li>
						</ul>
						<button className="cta-btn">Buy Now</button>
					</div>
				</section>
			</div>
		</>
	);
}
