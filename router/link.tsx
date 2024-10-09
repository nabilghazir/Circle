import { Link as CLink, LinkProps } from "@chakra-ui/react";
import { Link as RRLink, LinkProps as RRLinkProps } from "react-router-dom";
import React from "react";
import { theme } from "../src/theme/theme";

type RedirectProps = LinkProps & RRLinkProps & { children: React.ReactNode };

export function Redirect({ children, to, ...props }: RedirectProps) {
    return (
        <CLink
            as={RRLink}
            to={to}
            {...props}
            _hover={{ color: theme.colors.green }}
            transition="color 0.2s ease-in-out"
            textDecoration="none"
        >
            {children}
        </CLink>
    );
}
