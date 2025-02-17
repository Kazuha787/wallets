import chalk from "chalk";

export const createBanner = () => {
  const banner = `

██╗  ██╗ █████╗ ███████╗██╗   ██╗██╗  ██╗ █████╗ 
██║ ██╔╝██╔══██╗╚══███╔╝██║   ██║██║  ██║██╔══██╗
█████╔╝ ███████║  ███╔╝ ██║   ██║███████║███████║
██╔═██╗ ██╔══██║ ███╔╝  ██║   ██║██╔══██║██╔══██║
██║  ██╗██║  ██║███████╗╚██████╔╝██║  ██║██║  ██║
╚═╝  ╚═╝╚═╝  ╚═╝╚══════╝ ╚═════╝ ╚═╝  ╚═╝╚═╝  ╚═╝
                                                 

                            Wallet Generator v1.0.0
                            Created by: Kazuha                                                                              
    `;

  const info = `
    ╔════════════════════════════════════════════════════════════════╗
    ║                    Supported Blockchains:                      ║
    ║                                                                ║
    ║  > TON     - The Open Network (v4R2)                           ║
    ║  > SUI     - Sui Network                                       ║
    ║  > SOL     - Solana                                            ║
    ║  > EVM     - Ethereum Virtual Machine                          ║
    ║                                                                ║
    ╚════════════════════════════════════════════════════════════════╝
    `;

  console.log(chalk.cyan(banner));
  console.log(chalk.yellow(info));
};
