// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

/**
 * KRONOS 28 - Contrato de registro de folios
 * Creador: Marco Antonio Rojas Valdovinos (#000)
 * Firma: DMD-33
 * 
 * Registra hashes de folios con:
 * - hash del registro (bytes32)
 * - emisor (address)
 * - timestamp (uint256)
 * - estado (enum 0-6)
 */

contract Kronos28 {

    enum Estado {
        CREADO,      // 0
        VALIDADO,    // 1
        SUSPENDIDO,  // 2
        REACTIVADO,  // 3
        REVOCADO,    // 4
        PAUSADO,     // 5
        TRASLADADO   // 6
    }

    struct Folio {
        bytes32 hashRegistro;
        address emisor;
        uint256 timestamp;
        Estado estado;
    }

    mapping(bytes32 => Folio) public folios;

    address public owner;
    uint256 public totalFolios;

    event FolioCreado(bytes32 indexed hashRegistro, address indexed emisor, uint256 timestamp);
    event EstadoCambiado(bytes32 indexed hashRegistro, Estado estadoAnterior, Estado estadoNuevo);

    modifier soloOwner() {
        require(msg.sender == owner, "Solo owner puede ejecutar");
        _;
    }

    constructor() {
        owner = msg.sender;
    }

    /**
     * Registrar un nuevo folio.
     * El hash viene calculado desde lib/folio.ts
     */
    function crearFolio(bytes32 hashRegistro) external {
        require(hashRegistro != bytes32(0), "Hash invalido");
        require(folios[hashRegistro].timestamp == 0, "Folio ya existe");

        folios[hashRegistro] = Folio({
            hashRegistro: hashRegistro,
            emisor: msg.sender,
            timestamp: block.timestamp,
            estado: Estado.CREADO
        });

        totalFolios += 1;
        emit FolioCreado(hashRegistro, msg.sender, block.timestamp);
    }

    /**
     * Cambiar el estado de un folio.
     * Solo el owner (Fundador #000) puede cambiar estados.
     */
    function cambiarEstado(bytes32 hashRegistro, Estado nuevoEstado) external soloOwner {
        require(folios[hashRegistro].timestamp != 0, "Folio no existe");

        Estado anterior = folios[hashRegistro].estado;
        folios[hashRegistro].estado = nuevoEstado;

        emit EstadoCambiado(hashRegistro, anterior, nuevoEstado);
    }

    /**
     * Verificar un folio.
     * Devuelve: hash, emisor, timestamp, estado
     */
    function verificar(bytes32 hashRegistro) external view returns (
        bytes32,
        address,
        uint256,
        Estado
    ) {
        Folio memory f = folios[hashRegistro];
        return (f.hashRegistro, f.emisor, f.timestamp, f.estado);
    }

    /**
     * Verificar si un folio existe.
     */
    function existe(bytes32 hashRegistro) external view returns (bool) {
        return folios[hashRegistro].timestamp != 0;
    }

    /**
     * Transferir ownership (por si se migra a S.A. de C.V.).
     */
    function transferirOwnership(address nuevoOwner) external soloOwner {
        require(nuevoOwner != address(0), "Nuevo owner invalido");
        owner = nuevoOwner;
    }
}

// ============================================================
// FIN DEL CONTRATO
// © 2026 Marco Antonio Rojas Valdovinos · DMD-33
// ============================================================