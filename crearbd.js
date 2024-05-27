// Importamos el módulo de MongoDB
const { MongoClient, ObjectId } = require('mongodb');

// URL de conexión a la base de datos
const url = 'mongodb://localhost:27017';

// Nombre de la base de datos y la colección
const dbName = 'db_esecurity';
const collectionName = 'entregas';

// Documento completo que queremos insertar
const documento = {
  "_id": new ObjectId(),
  "IdInstitutoOK": "9001",
  "IdNegocioOK": "1101",
  "IdEntregaOK": "9001-1101-111222333444",
  "IdEntregaBK": "AP-1500",
  "IdOrdenOK": "9001-653748d95a32",
  "info_ad": [
    {
      "IdEtiquetaOK": "",
      "IdEtiqueta": "IdFechaPrimerEnvio",
      "Etiqueta": "Fecha del Primer Envio",
      "Valor": "2023-12-04T00:00:00.628Z",
      "IdTipoSeccionOK": "IdSeccionesEntregas-IdFechas",
      "Secuencia": 10,
      "detail_row": {
        "Activo": "S",
        "Borrado": "N",
        "detail_row_reg": [
          {
            "FechaReg": {
              "$date": "2022-04-30T00:00:00.628Z"
            },
            "UsuarioReg": "FIBARRAC"
          }
        ]
      }
    },
    {
      "IdEtiquetaOK": "",
      "IdEtiqueta": "IdFechaUltimoEnvio",
      "Etiqueta": "Fecha del Ultimo Envio",
      "Valor": "2023-12-08T00:00:00.628Z",
      "IdSeccionOK": "IdSeccionesEntregas-IdFechas",
      "Secuencia": 20,
      "detail_row": {
        "Activo": "S",
        "Borrado": "N",
        "detail_row_reg": [
          {
            "FechaReg": {
              "$date": "2022-04-30T00:00:00.628Z"
            },
            "UsuarioReg": "FIBARRAC"
          }
        ]
      }
    }
  ],
  "envios": [
    {
      "IdDomicilioOK": "9001-706706706706-12345678",
      "IdPaqueteriaOK": "9001-333444555666",
      "IdTipoMetodoEnvio": "IdTipoMetodoEnvio-IdEstandar",
      "CostoEnvio": 0,
      "info_ad": [
        {
          "IdEtiquetaOK": "",
          "IdEtiqueta": "IdCodigoSeguridad",
          "Etiqueta": "Codigo de Seguridad",
          "Valor": "ABCD1234",
          "IdTipoSeccionOK": "IdSeccionesPedidos-IdRecibe",
          "Secuencia": 10,
          "detail_row": {
            "Activo": "S",
            "Borrado": "N",
            "detail_row_reg": [
              {
                "FechaReg": {
                  "$date": "2022-04-30T00:00:00.628Z"
                },
                "UsuarioReg": "FIBARRAC"
              }
            ]
          }
        },
        {
          "IdEtiquetaOK": "",
          "IdEtiqueta": "IdQuienRecibe",
          "Etiqueta": "Quien Recibe",
          "Valor": "Alejandra Lepe Lepu",
          "IdSeccionOK": "IdSeccionesEntregas-IdRecibe",
          "Secuencia": 20,
          "detail_row": {
            "Activo": "S",
            "Borrado": "N",
            "detail_row_reg": [
              {
                "FechaReg": {
                  "$date": "2022-04-30T00:00:00.628Z"
                },
                "UsuarioReg": "FIBARRAC"
              }
            ]
          }
        },
        {
          "IdEtiquetaOK": "",
          "IdEtiqueta": "IdTelefono",
          "Etiqueta": "Telefono",
          "Valor": "+521234567890",
          "IdSeccionOK": "IdSeccionesEntregas-IdRecibe",
          "Secuencia": 30,
          "detail_row": {
            "Activo": "S",
            "Borrado": "N",
            "detail_row_reg": [
              {
                "FechaReg": {
                  "$date": "2022-04-30T00:00:00.628Z"
                },
                "UsuarioReg": "FIBARRAC"
              }
            ]
          }
        },
        {
          "IdEtiquetaOK": "",
          "IdEtiqueta": "IdCorreo",
          "Etiqueta": "Correo",
          "Valor": "contacto@logisticaexpress.com",
          "IdSeccionOK": "IdSeccionesEntregas-IdRecibe",
          "Secuencia": 40,
          "detail_row": {
            "Activo": "S",
            "Borrado": "N",
            "detail_row_reg": [
              {
                "FechaReg": {
                  "$date": "2022-04-30T00:00:00.628Z"
                },
                "UsuarioReg": "FIBARRAC"
              }
            ]
          }
        },
        {
          "IdEtiquetaOK": "",
          "IdEtiqueta": "IdFechaEntregaIni",
          "Etiqueta": "Fecha estimada de entrega inicial",
          "Valor": "2023-12-04T16:30:00.628Z",
          "IdSeccionOK": "IdSeccionesEntregas-IdRecibe",
          "Secuencia": 50,
          "detail_row": {
            "Activo": "S",
            "Borrado": "N",
            "detail_row_reg": [
              {
                "FechaReg": {
                  "$date": "2023-11-30T00:00:00.628Z"
                },
                "UsuarioReg": "FIBARRAC"
              }
            ]
          }
        },
        {
          "IdEtiquetaOK": "",
          "IdEtiqueta": "IdFechaEntregaFin",
          "Etiqueta": "Fecha estimada de entrega limite",
          "Valor": "2023-12-08T20:30:00.628Z",
          "IdSeccionOK": "IdSeccionesEntregas-IdRecibe",
          "Secuencia": 60,
          "detail_row": {
            "Activo": "S",
            "Borrado": "N",
            "detail_row_reg": [
              {
                "FechaReg": {
                  "$date": "2023-11-30T00:00:00.628Z"
                },
                "UsuarioReg": "FIBARRAC"
              }
            ]
          }
        }
      ],
      "productos": [
        {
          "IdProdServOK": "9001-64e148b5ae58",
          "IdPresentaOK": "9001-64e148b5ae58-64e148b5",
          "DesProdServ": "LapTop HP ZBOOK Firefly G8, Core i7, Full HD 15.6 pul.",
          "DesPresenta": "Empresarial Gris Oxford - 500GB - 16RAM",
          "CantidadPed": 5,
          "CantidadEnt": 3
        },
        {
          "IdProdServOK": "9001-123456789012",
          "IdPresentaOK": "9001-123456789012-12345678",
          "DesProdServ": "LapTop HP ZBOOK Firefly G8, Core i7, Full HD 15.6 pul.",
          "DesPresenta": "Empresarial Gris Oxford - 500GB - 32RAM",
          "CantidadPed": 3,
          "CantidadEnt": 3
        }
      ],
      "estatus": [
        {
          "IdTipoEstatusOK": "IdEstatusEnvio-IdEnProceso",
          "Actual": "N",
          "Observacion": "",
          "detail_row": {
            "Activo": "S",
            "Borrado": "N",
            "detail_row_reg": [
              {
                "FechaReg": {
                  "$date": "2023-09-14T16:14:19.034Z"
                },
                "UsuarioReg": "FIBARRAC"
              }
            ]
          }
        },
        {
          "IdTipoEstatusOK": "IdEstatusEnvio-IdListoEnviar",
          "Actual": "N",
          "Observacion": "",
          "detail_row": {
            "Activo": "S",
            "Borrado": "N",
            "detail_row_reg": [
              {
                "FechaReg": {
                  "$date": "2023-09-14T16:14:19.034Z"
                },
                "UsuarioReg": "FIBARRAC"
              }
            ]
          }
        },
        {
          "IdTipoEstatusOK": "IdEstatusEnvio-IdEsperaRepartidor",
          "Actual": "N",
          "Observacion": "",
          "detail_row": {
            "Activo": "S",
            "Borrado": "N",
            "detail_row_reg": [
              {
                "FechaReg": {
                  "$date": "2023-09-14T16:14:19.034Z"
                },
                "UsuarioReg": "FIBARRAC"
              }
            ]
          }
        },
        {
          "IdTipoEstatusOK": "IdEstatusEnvio-IdEntregaRepartidor",
          "Actual": "N",
          "Observacion": "",
          "detail_row": {
            "Activo": "S",
            "Borrado": "N",
            "detail_row_reg": [
              {
                "FechaReg": {
                  "$date": "2023-09-14T16:14:19.034Z"
                },
                "UsuarioReg": "FIBARRAC"
              }
            ]
          }
        },
        {
          "IdTipoEstatusOK": "IdEstatusEnvio-IdEnTransito",
          "Actual": "N",
          "Observacion": "",
          "detail_row": {
            "Activo": "S",
            "Borrado": "N",
            "detail_row_reg": [
              {
                "FechaReg": {
                  "$date": "2023-09-14T16:14:19.034Z"
                },
                "UsuarioReg": "FIBARRAC"
              }
            ]
          }
        },
        {
          "IdTipoEstatusOK": "IdEstatusEnvio-IdLlegaDestino",
          "Actual": "N",
          "Observacion": "",
          "detail_row": {
            "Activo": "S",
            "Borrado": "N",
            "detail_row_reg": [
              {
                "FechaReg": {
                  "$date": "2023-09-14T16:14:19.034Z"
                },
                "UsuarioReg": "FIBARRAC"
              }
            ]
          }
        },
        {
          "IdTipoEstatusOK": "IdEstatusEnvio-IdRecibeCliente",
          "Actual": "N",
          "Observacion": "",
          "detail_row": {
            "Activo": "S",
            "Borrado": "N",
            "detail_row_reg": [
              {
                "FechaReg": {
                  "$date": "2023-09-14T16:14:19.034Z"
                },
                "UsuarioReg": "FIBARRAC"
              }
            ]
          }
        },
        {
          "IdTipoEstatusOK": "IdEstatusEnvio-IdRechazaCliente",
          "Actual": "N",
          "Observacion": "El producto llego dañado",
          "detail_row": {
            "Activo": "S",
            "Borrado": "N",
            "detail_row_reg": [
              {
                "FechaReg": {
                  "$date": "2023-09-14T16:14:19.034Z"
                },
                "UsuarioReg": "FIBARRAC"
              }
            ]
          }
        },
        {
          "IdTipoEstatusOK": "IdEstatusEnvio-IdDevolucionRecibida",
          "Actual": "N",
          "Observacion": "",
          "detail_row": {
            "Activo": "S",
            "Borrado": "N",
            "detail_row_reg": [
              {
                "FechaReg": {
                  "$date": "2023-09-14T16:14:19.034Z"
                },
                "UsuarioReg": "FIBARRAC"
              }
            ]
          }
        }
      ]
    }
  ],
  "estado": {
    "IdTipoEntregaOK": "IdTipoEntrega-IdParcial",
    "Activo": "S",
    "Borrado": "N",
    "detail_row": {
      "Activo": "S",
      "Borrado": "N",
      "detail_row_reg": [
        {
          "FechaReg": {
            "$date": "2022-04-30T00:00:00.628Z"
          },
          "UsuarioReg": "FIBARRAC"
        }
      ]
    }
  },
  "detail_row": {
    "Activo": "S",
    "Borrado": "N",
    "detail_row_reg": [
      {
        "FechaReg": {
          "$date": "2022-04-30T00:00:00.628Z"
        },
        "UsuarioReg": "FIBARRAC"
      }
    ]
  }
};

// Función para insertar el documento en la base de datos
async function insertDocument() {
  const client = new MongoClient(url);

  try {
    await client.connect();

    const db = client.db(dbName);
    const collection = db.collection(collectionName);

    // Insertamos el documento en la colección
    const result = await collection.insertOne(documento);
    console.log(`Documento insertado con el _id: ${result.insertedId}`);
  } catch (err) {
    console.error(`Error al insertar el documento: ${err}`);
  } finally {
    await client.close();
  }
}

// Ejecutamos la función para insertar el documento
insertDocument();