/**
 * KRONOS 28 - Script de despliegue
 * Creador: Marco Antonio Rojas Valdovinos (#000)
 * Firma: DMD-33
 * 
 * Uso:
 *   npx hardhat run scripts/deploy.ts --network sepolia
 * 
 * Requiere en .env:
 *   SEPOLIA_RPC_URL=https://sepolia.infura.io/v3/TU_KEY
 *   PRIVATE_KEY=tu_llave_privada_sin_0x
 * 
 * ⚠️ NUNCA subir el .env al repo.
 */

import { ethers } from 'hardhat';

async function main() {
  console.log('🚀 Desplegando Kronos28.sol...');

  const [deployer] = await ethers.getSigners();
  const balance = await ethers.provider.getBalance(deployer.address);

  console.log('📍 Deployer:', deployer.address);
  console.log('💰 Balance:', ethers.formatEther(balance), 'ETH');

  if (balance === 0n) {
    console.error('❌ Sin fondos en la wallet. Consigue Sepolia ETH de un faucet.');
    process.exit(1);
  }

  const Kronos28 = await ethers.getContractFactory('Kronos28');
  const contrato = await Kronos28.deploy();

  await contrato.waitForDeployment();
  const direccion = await contrato.getAddress();

  console.log('');
  console.log('✅ Kronos28 desplegado');
  console.log('📄 Dirección:', direccion);
  console.log('');
  console.log('Copia esta línea a .env:');
  console.log(`NEXT_PUBLIC_CONTRACT_ADDRESS=${direccion}`);
  console.log('');
  console.log('Verifica en Etherscan:');
  console.log(`https://sepolia.etherscan.io/address/${direccion}`);
  console.log('');
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error('❌ Error:', error);
    process.exit(1);
  });

// ============================================================
// FIN DEL ARCHIVO
// © 2026 Marco Antonio Rojas Valdovinos · DMD-33
// ============================================================