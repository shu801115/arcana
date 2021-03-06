const es = {
  alertBodyAccessPermissionCamera:'Se necesita acceso a tu cámara. ¿Otorgas acceso?',
  alertBodyAccessPermissionMediaLibrary:'Se necesita acceso a tus fotos. ¿Otorgas acceso?',
  alertBodyAddressExist:'Esta dirección ya existe.',
  alertBodyAddressNotExist:'Esta dirección no existe.',
  alertBodyAddressNotExistNemlog:'Esta dirección no ha sido registrada con NEMLOG.',
  alertBodyAddressRequired:'Requerimos una dirección para proceder.',
  alertBodyAlreadyDefaultWallet:'Esta ya es tu dirección por defecto.',
  alertBodyAmountDivisibilityError:'El monto que has ingresado no es válido. Por favor revisa la divisibilidad.',
  alertBodyAmountGreaterZero:'La cantidad que has ingresado debe ser igual o superior a 0.',
  alertBodyCompleteAddressRegistration:'La dirección ha sido registrada.',
  alertBodyCompleteAddressUpdate:'La dirección ha sido actualizada.',
  alertBodyCompleteGroupUpdate:'El grupo ha sido actualizado.',
  alertBodyDefaultWalletNotDelete:'Tu cartera por defecto no puede ser eliminada.',
  alertBodyDeleteAddress:'Esta dirección ha sido eliminada.',
  alertBodyDeleteError:'Error: Falla en la eliminación.',
  alertBodyDeleteGroup:'Este grupo ha sido eliminado.',
  alertBodyDivisibilityRequired:'Debes seleccionar la divisibilidad de tu mosaico.',
  alertBodyDurationGreaterZero:'La duración debe ser mayor o igual a 0.',
  alertBodyExistOtherDevice1:'¡Esta cartera ya existe en otro dispositivo!',// +walletname -> walletExistOtherDevice2
  alertBodyExistOtherDevice2:'Esto será aplicado.',
  alertBodyFailDelete:'Fallo al eliminar.',
  alertBodyFailRegistration:'Fallo al registrar.',
  alertBodyFailUpdate:'Fallo al actualizar.',
  alertBodyGroupCreated:'Grupo creado.',
  alertBodyGroupExist:'Este grupo ya existe.',
  alertBodyGroupRequired:'Un grupo es requerido.',
  alertBodyGroupAtLeastOne:'Debes tener al menos un grupo.',
  alertBodyHarvestWillStart:'El estado de tu cosecha se actualizará en unos momentos.',
  alertBodyIncorrectNodeUrl:'URL incorrecta.',
  alertBodyInsufficientBalance:'Balance insuficiente.',
  alertBodyInsufficientXym:'Balance insuficiente.',
  alertBodyInsufficientXymHarvest:'Balance insuficiente. Se requiere 10,000 XYM.',
  alertBodyInvalidAmount:'Monto inválido.',
  alertBodyInvalidAddress:'Dirección inválida.',
  alertBodyInvalidNodeUrl:'URL inválida.',
  alertBodyInvalidNodeMaxDelegate:'Tu nodo tiene el numero máximo de delegados.',
  alertBodyMaxWallet:'El número máximo de billeteras es 50.',
  alertBodyMosaicAmountRange:'El monto del mosaico debe ser entre 1~8,999,999,999,000,000.',
  alertBodyMosaicImageRequired:'Selecciona un ícono para tu mosaico.',
  alertBodyMosaicNameRequired:'Nombre tu mosaico.',
  alertBodyMosaicNotExist:'Este mosaico no existe.',
  alertBodyMosaicRegistered:'La información de tu mosaico ha sido registrada.',
  alertBodyNameRequired:'Un nombre es requerido.',
  alertBodyNameTooLong:'El nombre de tu cartera es muy largo.',
  alertBodyNetworkError:'Error: Conexión de la red.',
  alertBodyNodeDescriptionRequired:'El campo descripción no puede estar vacío.',
  alertBodyNodeRankImproved:'¡Tu rango ha mejorado!',
  alertBodyNodeImageRequired:'Selecciona una imagen para tu nodo.',
  alertBodyNodeNameRequired:'Tu nodo necesita un nombre.',
  alertBodyNodeTwitterRequired:'Tu cuenta de Twitter es requerida.',
  alertBodyNodeUpload:'¡Actualizado!',
  alertBodyNodeUploadFirstTime:'Tu subida fue exitosa.\nEspera la confirmación de los desarrolladores.',
  alertBodyNoWallet:'No se ha encontrado datos de la cartera.',
  alertBodyPrivateKeyDeleted:'La llave privada ha sido borrada.',
  alertBodyPrivateKeyRequired:'Se requiere la llave privada.',
  alertBodyPrivateKeyIncorrect:'La llave privada es incorrecta.',
  alertBodyQrNotIncludeInvoice:'El código QR no contiene una factura.',
  alertBodyQrNotIncludeAddress:'El código QR no contiene una dirección.',
  alertBodySendError:'Error: Envío fallido.',
  alertBodySpecifiedAmountInsufficient1:'El monto especificado es insuficiente.',
  alertBodySpecifiedAmountInsufficient2:'Tu balance es insuficiente.',
  alertBodyThankYou:''Muchas gracias!',
  alertBodyTxSent:''La transacción ha sido enviada!',
  alertBodyWaitHashLock:'Por favor espera unos minutos. Tu MultisigTX será validada luego que la red confirme tu HashLockTX.',
  alertBodyWalletDataBroken:'La información de tu cartera está corrupta.',
  alertBodyWalletNameRequired:'La cartera requiere un nombre.',
  alertBodyWalletRequired:'Tu cartera es requerida.',

  alertHeaderComplete:'Completado.',
  alertHeaderError:'ERROR.',
  alertHeaderFailed:'Fallo.',
  alertHeaderRegistered:'Registrado.',
  alertHeaderSuccess:'¡Éxito!',

  addAddressAddressFormLabel:'Dirección',
  addAddressGroupFormLabel:'Grupo',
  addAddressInputInformation:'Ingresa información',
  addAddressNameFormLabel:'Nombre',
  addAddressRegisterButtonLabel:'Registrar',

  addressFabAdd:'Agregar',
  addressFabGroup:'Grupo',
  addressRenameModalBody:'Editar nombre de Cartera.',
  addressRenameModalHeader:'Renombrar Dirección',  
  addressRenameModalNameFormLabel:'Nombre',

  authenticationFail:'Autorización fallida.',
  authenticationFallBack:'No Autorizado.',
  authenticationNoBioAuth:'No se encuentra biometría. Por favor utiliza un dispositivo con características de biometría para mejor seguridad.',
  authenticationNoBioDisable:'No se encuentra biometría. Por favor utiliza un dispositivo con características de biometría para mejor seguridad.',
  authenticationPrompt:'Accede a Arcana!',

  chatAnonymous:'Anónimo',

  donationImproving:'¡Mohican Shu-san trabajando duro!',
  donationIntroduction:'Arcana ha sido creado por la comunidad, para la comunidad. Por favor considera donar al proyecto!',
  donationJoinDevelopment:'¿Quieres trabajar con nosotros? ¡Por favor contáctanos en Twitter o Trello!',
  donationDonate:'Donar a...',
  donationSendFee:'Tarifa',
  donationCoffee:'Comprar un café',
  donationLunch:'Compra un almuerzo',
  donationTechBook:'Compra un libro',

  functionAddressBook:'Dirección\nLibro',
  functionChat:'Chat',
  functionHarvest:'Cosechar',
  functionInvoice:'Factura',
  functionMosaic:'Mosaico',
  functionNemberArt:'NEMber\nArt',
  functionNemlog:'NEMLOG',
  functionNode:'Nodo',
  functionSend:'Enviar',
  functionSetting:'Configuración',
  functionWallet:'Cartera',

  generalCancel:'Cancelar',
  generalError:'ERROR.',
  generalHash:'Hash',
  generalJpy:'JPY',
  generalLoading:'Cargando...',
  generalMessage:'Mensaje',
  generalNoData:'Sin Datos.',
  generalOk:'OK',
  generalProcessing:'Procesando...',
  generalSending:'Enviando...',
  generalStart:'Iniciar',
  generalStop:'Detener',
  generalSubmit:'Enviando',
  generalUploading:'Subiendo...',
  generalUsd:'USD',

  groupEditModalBody:'Ingresa Nombre de Grupo.',
  groupEditModalHeader:'Nombre de Grupo',

  harvestDelegateFee:'Tarifa de Delegación',
  harvestDelegateNumber:'Delegado #',
  harvestDelegateTab:'Delegado',
  harvestDirectDelegate:'Delegado Directo',
  harvestEnterTargetNodeUrl:'Ingresa la URL del nodo destino para delegación.',
  harvestHarvestStatus:'Estado de Cosecha',
  harvestHarvestStopButton:'Detener Cosecha',
  harvestHistoryTab:'Historia',
  harvestMyNode:'Mi Nodo',  
  harvestNodeActive:'Activo',
  harvestNodeDescription:'Descripción',
  harvestNodeDescriptionPlaceHolder:'Descripción de Nodo',
  harvestNodeDisplayRank:'Clasificación actual',
  harvestNodeIconSelect:'¡Selecciona un ícono!',
  harvestNodeIconSelectButton:'Cargar Imagen',
  harvestNodeInactive:'Inactivo',  
  harvestNodeMaxDelegates:'Delegación Máxima',
  harvestNodeName:'Nombre de Nodo',
  harvestNodeNamePlaceHolder:'¡Tu nombre de nodo!',
  harvestNodeNoNeedRankUp:'¡Ya estás clasificado!',
  harvestNodeRankUp:'Subir de rango',
  HarvestNodeRankUpButton:'Subir de rango',
  HarvestNodeRankUpFee:'Tarifa',
  HarvestNodeUrl:'URL del nodo',
  HarvestRankUpSupport:'Apoya',
  HarvestRegistrationButton:'Registrarse',
  HarvestRegistrationNote1:'Después del registro, el desarrollador puede contactarte a través de Twitter para confirmar tu información. ¡Por favor abre tus DM!',
  HarvestRegistrationNote2:'(Nota: siga a @shu801115',
  harvestTwitterAccount:'Cuenta de Twitter',
  harvestUpdateButton:'Actualizar',
  harvestWebPage:'Página web',
  harvestWebPagePlaceHolder:'Página de introducción del nodo',

  historyAlreadySigned:'Ya firmado.',
  historyConfirmed:'Confirmado',
  historyDeadline:'Fecha límite',
  historyHash:'Hash',
  historyIssueAddress:'Dirección del problema',
  historyNotInAddressBook:'¡Cuidado! Esta dirección no está en tu libreta de direcciones.',
  historyNotSigned:'No firmado',
  historyNotSupport:'Este TX aún no es compatible.',
  historyPartial:'Parcial',
  historySign:'Firmado',
  historySignedAddress:'Dirección firmada',
  historyUnconfirmed:'Sin confirmar',

  homeCosignerAddress:'Dirección del cosignatario',
  homeCreateWallet:'Crear cartera',
  homeHarvest:'Cosecha',
  homeHarvestActive:'Activo',
  homeHarvestActivating:'Activando',
  homeHarvestDeactivating:'Desactivando',
  homeHarvestInactive:'Inactivo',
  homeHarvestKeyLinked:'Clave vinculada',
  homeImportance:'Importancia',
  homeJpyRateError:'ERROR: No se pudo recuperar JPY (ZAIF).',
  homeJpyXym:'JPY/XYM',
  homeManagingAddress:'Dirección de gestión',
  homeMosaicId:'ID',
  homeMosaicoDivisibilidad:'Divisibilidad',
  homeMosaicDuration:'Duración',
  homeMosaicIconRegistrationButton:'Registro de íconos',
  homeMosaicRestrictable:'Restringible',
  homeMosaicRevocable:'Revocable',
  homeMosaicSupplyAmount:'Suministro',
  homeMosaicSupplyMutable:'Suministro Mutable',
  homeMosaicTransferible:'Transferible',
  homeMosaicOwnerAddress:'Dirección del propietario',
  homeSelectWallet:'Seleccionar cartera',
  homeUsdRateError:'ERROR: No se pudo recuperar USD (Bittrex).',
  homeUsdXym:'USD/XYM',
  homeWalletAddress:'Dirección de la cartera',
  homeWalletName:'Nombre de la cartera,
  homeWelcome:'¡Bienvenido a Arcana!',
  homeWelcomeBody:'¡Creemos tu primera cartera!',

  indexTabDonation:'Donación',
  indexTabFunction:'Función',
  indexTabHistory:'Historia',
  indexTabHome:'Inicio',

  invoiceAmount:'Importe',
  invoiceAmountSmall:'Importe',
  billCreateQr:'Crear Código QR',
  invoiceInputCurrency:'Moneda de entrada',
  invoiceMessage: 'Mensaje',
  invoiceRate:'Tasa',
  invoiceRecipient: 'Destinatario',
  invoiceTitle: 'Factura',

  mosaicCreateButton:'Crear',
  mosaicCreateFee:'Crear tarifa',
  mosaicDivisibility:'Divisibilidad',
  mosaicDuration:'Duración',
  mosaicFee:'Tarifa',
  mosaicInputParameter:'Parámetros de entrada del mosaico',
  mosaicIssueAmount:'Cantidad',
  mosaicSupplyMutable:'Suministro mutable',
  mosaicTransferible:'Transferible',
  mosaicRestrictable:'Restringible',
  mosaicRevokable:'Revocable',

  nodeApplied:'Nodo aplicado.',
  nodeChoose:'Elegir un nodo',
  nodeCurrentNode:'Nodo actual',
  nodeLoadError:'ERROR: No se pudo recuperar la lista de nodos.',
  nodeMinFeeMultiplier:'Multiplicador de tarifa mínima',
  nodeNode:'Nodo',
  nodeNoResponse:'Sin respuesta del servidor.',

  postMosaicImageSelect:'¡Selecciona la imagen de tu mosaico!(Toque la imagen)',
  postMosaicInputName:'¡Ingresa el nombre de tu mosaico!',
  postMosaicName:'Nombre del mosaico',
  postMosaicRegisterButton:'Registrarse',

  profileAddress: 'Dirección',
  profileHomepageAddress:'Dirección de la página de inicio',
  profileHomepageUrl:'URL de la página de inicio',
  profileName: 'Nombre',
  profileTwitter:'Twitter',
  profileTwitterAccount:'Cuenta de Twitter',
  profileProfile:'Perfil',
  profileProfileDetail:'Información del perfil',
  profileTouchImageSelect:'Toca la imagen para seleccionar.',
  profileUpdateButton:'Actualizar',
  profileUpdated:'¡Actualizado!',
  profileUploadeError:'ERROR: Subir.',

  qrCreateAmount:'Cantidad',
  qrCreateMessage:'Mensaje',
  qrCreateMosaic:'Mosaico',
  qrCreateReceipient:'Receipient',

  sendAmount:'Cantidad',
  sendAmountAvailable:'Disponible',
  sendEncrypt:'Cifrar',
  sendMessage:'Mensaje',
  sendModalBody1:'¿Está seguro de que desea enviar?',
  sendModalBody2:'Tarifa',
  sendModalHeader:'Enviar',
  sendMosaic:'Mosaico',
  sendQrBody:'Leer el código QR de la factura.',
  sendSendButton:'Enviar',
  sendSendFee:'Tarifa de envío',
  sendSendFrom:'Enviar desde',
  sendTitle:'Enviar',

  settingAverage:'Promedio',
  setupChat:'Chat',
  settingChatIconHome:'Icono en Inicio',
  settingDeviceId:'ID del dispositivo',
  quickSetup:'Rápido',
  settingFee:'Tarifa',
  settingMaxAmount:'Cantidad Máxima',
  configurationHarvestNotification:'Cosecha',
  settingNotificationNotSupported:'Las notificaciones no son compatibles.',
  settingNotificationRelated:'Notificación',
  settingSendRelated:'Enviando',
  settingSlow:'Lento',
  settingSlowest:'Más lento',
  settingNotificationTx:'Transacción',
  settingTxSpeed:'Velocidad de transacción',
  settingVersion:'Versión',
  settingXymSendLimit:'Max XYM por transacción',

  symbolNoWallet:'No hay cartera disponible.',
  symbolMultiSigProhibit:'Esta TX no se puede emitir desde una cuenta multisig.',
  symbolNoPrivateKey:'Esta cartera no tiene clave privada.',
  symbolMaxSendAmount:'La cantidad máxima que puede enviar es',// ooo xym
  symbolSecretKeyError:'No se pudo recuperar la clave secreta.',
  symbolNoPublickKeyEncrypt:'No se encontró ninguna clave pública para el cifrado.',
  symbolAnnounceSucceed:'¡Anuncio exitoso!',
  symbolAnnounceError:'ERROR: TX no fue anunciada.',
  symbolAnnounceMultisigSucceed:'¡Multisig TX anunciada!',
  symbolAnnounceMultisigError:'ERROR: MultisigTX no fue enviada.',

  titleAddressAdd:'Agregar dirección',
  titleAddressBook:'Libreta de direcciones',
  titleAddressGroup:'Grupo de direcciones',
  titleInvoiceQr:'Código QR de la factura',
  titleMnemonicQr:'Código QR mnemotécnico',
  titleMosaicPost:'Registra tu mosaico',
  titleNemberArtDetail:'Detalle de arte',
  titleNewWallet:'Nueva cartera',
  titleNodeRankUp:'¡Sube de rango el nodo!',
  titleNodeRegister:'Registro de nodo',
  titleProfileEdit:'Edición de perfil',
  titleProfileView:'Perfil',
  titleSetting:'Configuración',
  titleTxExplorer:'Explorador',
  titleWallet:'Cartera',
  titleWalletQr:'Código QR de la cartera',

  waitModalCreating:'Creando...',
  waitModalSigning:'Firmando...',
  waitModalUploading:'Subiendo...',

walletAddNote1:'La captura de pantalla ha sido guardada. Guarda también tu clave privada en una nota cifrada o en una bóveda de contraseñas.',
  walletAddNote2:'Tu clave privada es como tu contraseña bancaria. Te permite acceder a tu cartera. No la compartas y guárdalo en un lugar seguro.',
  walletAddNote3:'Si está listo para continuar, haz click en Registro de la cartera.',
  walletAddress:'Dirección',
  walletAddressMakeError:'ERROR: Generación de direcciones. Inténtalo de nuevo.',
  walletCopyAddress:'Copiar dirección',
  walletCopyAddressPrivateKeyButton:'Copiar dirección y clave privada',
  walletCreateNewWallet:'Crear nueva cartera',
  walletCreateNewWalletButton:'Crear nueva cartera',
  walletCreateWalletButton:'Crear cartera',
  walletDefaultIndicator:'Predeterminado',
  walletDeleteAllButton:'Eliminar todo',
  walletDeleteWalletButton:'Eliminar cartera',
  walletDisablePrivateKeyButton:'Deshabilitar clave privada',
  walletEditProfileButton:'Editar perfil',
  walletEditWalletName:'Editar nombre de la cartera.',
  walletEnterMnemonic:'Ingrese su mnemotécnico.',
  walletEnterWalletName:'Ingrese el nombre de la cartera.',
  walletGenerateWalletButton:'Generar cartera',
  walletMakeMnemonic:'Importar desde mnemotécnico',
  walletMakeNew:'Crear nueva cartera HD',
  walletMakePrivateKey:'Importar desde clave privada',
  walletMnemonic:'Mnemotécnico',
  walletMnemonicNotInQr:'El código QR no incluye un mnemotécnico.',
  walletMnemonicQrBody:'Escanea el código QR mnemotécnico emitido por la cartera Symbol.',
  walletMnemonicResult1:'¡Elige tu cartera favorita!',
  walletMnemonicResult2:'Guarde su clave privada en un lugar seguro.',
  walletMnemonicWord:'Palabra mnemotécnica',
  walletNeedScreenShotQr:'Guarda tu clave privada en un lugar seguro y haz una captura de pantalla de este código QR.',
  walletNeedWalletName:'Se requiere un nombre de cartera.',
  walletNew:'Nuevo',
  walletNewBody:'Vamos a crear tu cartera. Ingresa el nombre de tu cartera.',
  walletNewBody1:'Se puede crear una cartera a partir de los siguientes 3 métodos:',
  walletoNewBody2:'Toque',// + Plus + monederoNewBody3
  walletNewBody3: '¡Para empezar!',
  walletNewTitle:'Crea tu cartera.',
  walletNewWalletAdded:'Nueva cartera agregada.',
  walletNetworkError:'Error de red.',
  walletPrivateKey:'Clave privada',
  walletPrivateKeyBody:'Ingrese el nombre de su cartera y la clave privada (o escanea tu código QR)',
  walletPrivateKeyCopied:'Clave privada copiada.',
  walletPrivateKeyNotInQr:'Este código QR no incluye una clave privada.',
  walletRenameWallet:'Renombra tu cartera',
  walletScreenCaptureButton:'Captura de pantalla',
  walletScreenShotError:'ERROR: Captura de pantalla fallida.',
  walletScreenShotSaved:'Captura de pantalla guardada.',
  walletSelectedIndicator:'Seleccionado',
  walletSetDefaultWalletButton:'Establecer cartera predeterminada',
  walletWalletAddress:'Dirección de la cartera',
  walletWalletFromMnemonecWords:'Cartera de Mnemotécnico',
  walletWalletFromPrivatekey:'Cartera de clave privada',
  walletWalletName:'Nombre de la cartera',
  walletWalletQrBody:'Escanea el código QR emitido por la cartera Symbol.',
  walletWalletRegistrationButton:'Registro de cartera',
  walletWihoutPrivateKey:'Sin clave privada',

 YesNoModalDefaultWalletHeader:'Cartera predeterminada',
  YesNoModalDefaultWalletBody:'¿Estás seguro de configurarlo como tu cartera predeterminada?',
  YesNoModalDeleteAddressHeader:'Eliminar dirección',
  YesNoModalDeleteAddressBody:'¿Estás seguro de que deseas eliminar esta dirección?',
  YesNoModalDeleteAllWalletHeader:'Eliminar todas las carteras',
  YesNoModalDeleteAllWalletBody:'¿Estás seguro de eliminar TODAS tus carteras?',
  YesNoModalDeleteGroupHeader:'Eliminar grupo',
  YesNoModalDeleteGroupBody:'¿Estás seguro que deseas eliminar este grupo?\nTambién se eliminarán todas las direcciones dentro de este grupo.',
  YesNoModalDeletePrivateKeyHeader:'Eliminar clave privada',
  YesNoModalDeletePrivateKeyBody:'¿Estás seguro que deseas eliminar tu clave privada de este dispositivo?',
  YesNoModalDeleteWalletHeader:'Eliminar cartera',
  YesNoModalDeleteWalletBody:'¿Estás seguro que deseas eliminar esta cartera?',
  YesNoModalHarvestStartHeader:'Activar cosecha',
  YesNoModalHarvestStartBody:'¿Estás seguro que deseas comenzar a cosechar?',
  YesNoModalHarvestStopHeader:'Desactivar cosecha',
  YesNoModalHarvestStopBody:'¿Estás seguro que deseas dejar de cosechar?',
  YesNoModalMosaicCreateMosaicHeader:'Crear Mosaico',
  YesNoModalMosaicCreateMosaicBody:'¿Estás seguro que deseas crear este mosaico?',
  YesNoModalNodeDeleteHeader:'Eliminar nodo',
  YesNoModalNodeDeleteBody:'¿Estás seguro de que deseas eliminar este nodo?',
  YesNoModalNodeRankUpHeader:'Clasificar nodo',
  YesNoModalNodeRankUpBody:'¿Te gustaría clasificar',// +ooo xym?
  YesNoModalNodeRegisterHeader:'Registro de nodo',
  YesNoModalNodeRegisterBody:'¿Estás seguro de que deseas registrarse?',
  YesNoModalSendDonationHeader:'Enviar donación',
  YesNoModalSendDonationBody:'¿Estás seguro que deseas donar?',
  YesNoModalSignHeader:'Firma de TX',
  YesNoModalSignBody:'¿Estás seguro que deseas firmar este TX agregado añadida?',
}
export default es;

