import * as path from "node:path";
import * as os from "node:os";

export const NODE_MODULES_DIR = path.join(process.cwd(), "node_modules");
export const PACKAGES_DIR = path.join(NODE_MODULES_DIR);
export const PACKAGE_JSON_PATH = path.join(process.cwd(), "package.json");
export const charactersToReplaceInVersion = ["^", "~", ">=", "<=", ">", "<"];
export const CONCURRENCY_LIMIT = 100;
export const PACKAGE_MANAGER_VERSION = "1.1.0";
export const MAX_RETRIES = 3;
export const RETRY_DELAY_MS = 5000;

export const GLOBAL_PM_DIR = (() => {
    switch (os.platform()) {
        case "win32":
            return path.join(process.env.APPDATA || "", "pacm", "packages");
        case "darwin":
            return "/usr/local/lib/pacm/packages";
        case "linux":
            return "/usr/local/lib/pacm/packages";
        default:
            throw new Error("Unsupported operating system");
    }
})();
