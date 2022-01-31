import React from 'react';
import {Link} from 'react-router-dom'
export default props => {
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <td>
                            Items
                        </td>
                    </tr>
                </thead>
                <tbody>
                        {props.product.map((product, index)=>(
                    <tr>
                    <td>
                            <Link to={`/product/${product._id}`}> {product.name}</Link>

                    </td>
                    </tr>
                        ))}
                </tbody>
            </table>
        </div>
    )
}