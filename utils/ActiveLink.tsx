import { withRouter } from 'next/router';
import Link from 'next/link';
import React, { Children } from 'react';

const ActiveLink = ( { router, children, ...props }: any ) =>
{
    // if (router.pathname === props.href && props.activeClassName) {
    //     className = `${className} ${props.activeClassName}`.trim();
    // }

    // delete props.activeClassName;

    return (
        <Link href="" { ...props }>
            {children}
        </Link>
    )
};

export default withRouter(ActiveLink);