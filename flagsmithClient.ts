import flagsmith, {type IFlagsmith} from "flagsmith";

let flagSmithClient: IFlagsmith;

export function initFlagsmith(): Promise<void> {
    return new Promise((resolve) => {
        flagSmithClient = flagsmith;

        flagSmithClient.init({
            environmentID: import.meta.env.VITE_FLAGSMITH_ENVIRONMENT_ID!,
            onChange: () => {
                console.log("Flags updated:", flagSmithClient.getAllFlags());
                resolve();
            },
        });
    });
}

export function getFlagValue(flagName: string): boolean {
    return flagSmithClient.hasFeature(flagName);
}

export function getFlagTrait<T = unknown>(flagName: string): T | null {
    const flag = flagSmithClient.getValue(flagName);
    return flag ? (flag as T) : null;
}
