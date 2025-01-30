import { ActionPanel, Action, Detail } from "@raycast/api";

export default function ConvertAndroidSize(props: { arguments?: { size?: string } }) {
    const input = props.arguments?.size;

    if (!input) {
        return <Detail markdown="Please provide a size value in the command input" />;
    }

    const size = parseFloat(input);
    if (isNaN(size)) {
        return <Detail markdown="**Invalid input. Please enter a valid number" />;
    }

    const coef = 2.625

    const pxToDp = (size / coef).toFixed(1)
    const dpToPx = (size * coef).toFixed(1);

    const result = `### Conversion Results\n- PX to DP: **${pxToDp}**\n- DP to PX: **${dpToPx}**`;

    return (
        <Detail
            markdown={result}
            actions={
                <ActionPanel>
                    <Action.CopyToClipboard title="Copy DP" content={`${pxToDp}`} />
                    <Action.CopyToClipboard title="Copy PX" content={`${dpToPx}`} />
                </ActionPanel>
            }
        />
    );
}
