import { useEffect, useLayoutEffect, useState } from "react";
import { IReplace } from "../../../../../../shared/connection/api/kahbotApi/command/types";
import { ICommandReplacesListProps } from "./types";

export default function CommandReplacesList({
  replaces,
  actions,
}: ICommandReplacesListProps) {
  const [commandReplaces, setCommandReplaces] = useState<IReplace[]>([]);

  useEffect(() => {
    setCommandReplaces([...replaces]);
  }, [replaces]);

  const onUpdateReplace = (stateIndex: number, replace: IReplace) => {
    const replaces = [...commandReplaces];

    replaces[stateIndex] = replace;

    const newReplaces = [...replaces];

    setCommandReplaces(newReplaces);
    actions?.onChange(newReplaces);
  };

  return (
    <div>
      <ul>
        {commandReplaces.map((replace, index) => (
          <li>
            <form>
              <div>
                <label>Symbol</label>
                <input
                  value={commandReplaces[index].symbol}
                  onChange={(e) =>
                    onUpdateReplace(index, {
                      ...commandReplaces[index],
                      symbol: e.target.value,
                    })
                  }
                />
              </div>

              <div>
                <label>Value</label>
                <input
                  value={commandReplaces[index].with}
                  onChange={(e) =>
                    onUpdateReplace(index, {
                      ...commandReplaces[index],
                      with: e.target.value,
                    })
                  }
                />
              </div>
            </form>
          </li>
        ))}
      </ul>
    </div>
  );
}
