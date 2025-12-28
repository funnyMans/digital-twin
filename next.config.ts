import { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const nextConfig: NextConfig = {};

const withNextIntl = createNextIntlPlugin("./shared/i18n/requests.ts");
export default withNextIntl(nextConfig);
