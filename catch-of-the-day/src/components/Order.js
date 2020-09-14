import React from 'react';
import PropTypes from "prop-types";

import {formatPrice} from "../helpers";
import {TransitionGroup, CSSTransition} from 'react-transition-group';
import * as PropTypeShapes from "./PropTypeShapes";

class Order extends React.Component {
    static propTypes = {
        fishes: PropTypes.arrayOf(PropTypes.shape(PropTypeShapes.Fish)),
        order: PropTypes.object,
        removeFromOrder: PropTypes.func
    }

    renderOrder = (key) => {
        const fish = this.props.fishes[key];
        const count = this.props.order[key];
        const isAvailable = fish && fish.status === 'available';
        const transitionOptions = {
            classNames: "order",
            key,
            timeout: {enter: 250, exit: 250}
        };

        if (!fish) {
            return null;
        }

        if (!isAvailable) {
            return (
                <CSSTransition {...transitionOptions}>
                    <li key={key}>Sorry {fish.name} is no longer available</li>
                </CSSTransition>
            );
        }
        return (
            <CSSTransition {...transitionOptions}>
                <li key={key}>
                    <span>
                        <TransitionGroup component="span" className="count">
                            <CSSTransition
                                classNames="count"
                                key={count}
                                timeout={{enter: 500, exit: 500}}
                            >
                                <span>{count}</span>
                            </CSSTransition>
                        </TransitionGroup>
                        lbs
                        {fish.name}
                        <button onClick={() => this.props.removeFromOrder(key)}>&times;</button>
                    </span>
                </li>
            </CSSTransition>
        );
    }
    render() {
        const orderIds = Object.keys(this.props.order);
        const total = orderIds.reduce((prevTotal, key) => {
            const fish = this.props.fishes[key];
            const count = this.props.order[key];
            const isAvailable = fish && fish.status === 'available';
            if (isAvailable) {
                return prevTotal + (count * fish.price);
            }
            return prevTotal;
        }, 0);


        return (
            <div className="order-wrap">
                <h2>Order</h2>
                <TransitionGroup component="ul" className="order">
                    {orderIds.map(this.renderOrder)}
                </TransitionGroup>
                <p className="total-value">
                    Total:
                    <strong>{formatPrice(total)}</strong>
                </p>
            </div>
        );
    }
}

export default Order;
