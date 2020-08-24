import React from "react";

import { SportTypes } from "../../types";

import Tennis from "../../assets/icons/tennis.svg";
import Basketball from "../../assets/icons/basketball.svg";
import Football from "../../assets/icons/football.svg";
import Soccer from "../../assets/icons/soccer.svg";
import Baseball from "../../assets/icons/baseball.svg";

type Props = {
    name: SportTypes;
    size?: number;
}

function Icon({ name, size }: Props) {
    const Icons = React.useMemo<Record<SportTypes, any>>(() => ({
        tennis: <Tennis width={size ?? 30} height={size ?? 30} />,
        basketball: <Basketball width={size ?? 30} height={size ?? 30} />,
        football: <Football width={size ?? 30} height={size ?? 30} />,
        soccer: <Soccer width={size ?? 30} height={size ?? 30} />,
        baseball: <Baseball width={size ?? 30} height={size ?? 30} />,
    }), []);

    return Icons[name];
}

export default Icon;
