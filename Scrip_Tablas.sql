USE [prueba]
GO
/*************TABLA DEPARTAMENTO***********/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[departamento](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[codigo] [varchar](50) NOT NULL,
	[nombre] [varchar](50) NOT NULL,
	[activo] [bit] NOT NULL,
	[idUsuarioCreacion] [int] NULL,
CONSTRAINT [PK_departamento] PRIMARY KEY CLUSTERED 
([id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/*************TABLA CARGO***********/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[cargo](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[codigo] [varchar](50) NOT NULL,
	[nombre] [varchar](50) NOT NULL,
	[activo] [bit] NOT NULL,
	[idUsuarioCreacion] [int] NULL,
CONSTRAINT [PK_cargo] PRIMARY KEY CLUSTERED 
([id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/*************TABLA USERS***********/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[users](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[usuario] [varchar](50) NOT NULL,
	[primerNombre] [varchar](50) NOT NULL,
	[segundoNombre] [varchar](50) NOT NULL,
	[primerApellido] [varchar](50) NOT NULL,
	[segundoApellido] [varchar](50) NOT NULL,
	[idDepartamento] [int] NULL,
	[idCargo] [int] NULL,
CONSTRAINT [PK_usuario] PRIMARY KEY CLUSTERED 
([id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/***LLAVES FORANEAS*****/
ALTER TABLE [dbo].[users]  WITH CHECK ADD  CONSTRAINT [FK_users_departamento] FOREIGN KEY([id])
REFERENCES [dbo].[users] ([id])
GO
ALTER TABLE [dbo].[users] CHECK CONSTRAINT [FK_users_departamento]
GO

/*************************/
ALTER TABLE [dbo].[users]  WITH CHECK ADD  CONSTRAINT [FK_users_cargo] FOREIGN KEY([id])
REFERENCES [dbo].[users] ([id])
GO
ALTER TABLE [dbo].[users] CHECK CONSTRAINT [FK_users_cargo]
GO

/*************************/
ALTER TABLE [dbo].[departamento]  WITH CHECK ADD  CONSTRAINT [FK_departamento_usuario] FOREIGN KEY([id])
REFERENCES [dbo].[departamento] ([id])
GO
ALTER TABLE [dbo].[departamento] CHECK CONSTRAINT [FK_departamento_usuario]
GO

/*************************/
ALTER TABLE [dbo].[cargo]  WITH CHECK ADD  CONSTRAINT [FK_cargo_usuario] FOREIGN KEY([id])
REFERENCES [dbo].[cargo] ([id])
GO
ALTER TABLE [dbo].[cargo] CHECK CONSTRAINT [FK_cargo_usuario]
GO

/*=======PROCEDIMIENTOS ALMACENADOS PARA USERS=====*/
/***INSERTAR DATOS****/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
/*************/
ALTER PROCEDURE [dbo].[SetUsers]
	@iTransaccion	as VARCHAR(50),
	@iXML			as XML = NULL
AS
BEGIN
	-- SET NOCOUNT ON added to prevent extra result sets from
	-- interfering with SELECT statements.
	SET NOCOUNT ON;
	DECLARE @respuesta AS VARCHAR(10);
	DECLARE @leyenda AS VARCHAR(100);
	DECLARE @id AS INT;
	DECLARE @usuario AS VARCHAR(50);
	DECLARE @primerNombre AS VARCHAR(50);
	DECLARE @segundoNombre AS VARCHAR(50);
	DECLARE @primerApellido AS VARCHAR(50);
	DECLARE @segundoApellido AS VARCHAR(50);
	DECLARE @idDepartamento AS INT;
	DECLARE @idCargo AS INT;
		
	BEGIN TRY
		BEGIN TRANSACTION TRX_DATOS
			IF (@iTransaccion = 'INSERTAR_USUARIO')
				BEGIN
					SELECT  @usuario = LTRIM(RTRIM(DATO_XML.X.value('usuario[1]','VARCHAR(50)'))),
							@primerNombre = LTRIM(RTRIM(DATO_XML.X.value('primerNombre[1]','VARCHAR(50)'))),
							@segundoNombre = LTRIM(RTRIM(DATO_XML.X.value('segundoNombre[1]','VARCHAR(50)'))),
							@primerApellido = LTRIM(RTRIM(DATO_XML.X.value('primerApellido[1]','VARCHAR(50)'))),
							@segundoApellido = LTRIM(RTRIM(DATO_XML.X.value('segundoApellido[1]','VARCHAR(50)')))
														
					FROM @iXML.nodes('/users') AS DATO_XML(X)

					SET @idDepartamento = (select @iXML.value('(/users/departamento/id)[1]','INT'))
					SET @idCargo = (select @iXML.value('(/users/cargo/id)[1]','INT'))

					INSERT INTO users(usuario,primerNombre,segundoNombre,primerApellido,segundoApellido,idDepartamento,idCargo)
					Values (@usuario,@primerNombre,@segundoNombre,@primerApellido,@segundoApellido,@idDepartamento,@idCargo);

					SET @Respuesta ='Ok'
					SET @Leyenda = 'Se ha insertado de manera correcta el usuario: '+@usuario+' al Sistema'

				END

			IF (@iTransaccion = 'ACTUALIZAR_USUARIO')
				BEGIN
					SELECT  @usuario = LTRIM(RTRIM(DATO_XML.X.value('usuario[1]','VARCHAR(50)'))),
							@primerNombre = LTRIM(RTRIM(DATO_XML.X.value('primerNombre[1]','VARCHAR(50)'))),
							@segundoNombre = LTRIM(RTRIM(DATO_XML.X.value('segundoNombre[1]','VARCHAR(50)'))),
							@primerApellido = LTRIM(RTRIM(DATO_XML.X.value('primerApellido[1]','VARCHAR(50)'))),
							@segundoApellido = LTRIM(RTRIM(DATO_XML.X.value('segundoApellido[1]','VARCHAR(50)')))
														
					FROM @iXML.nodes('/users') AS DATO_XML(X)

					SET @idDepartamento = (select @iXML.value('(/users/departamento/id)[1]','INT'))
					SET @idCargo = (select @iXML.value('(/users/cargo/id)[1]','INT'))

					UPDATE [users]
					 SET
						[usuario] = @usuario,
						[primerNombre] = @primerNombre,
						[segundoNombre] = @segundoNombre,
						[primerApellido] = @primerApellido,
						[segundoApellido] = @segundoApellido,
						[idDepartamento] = @idDepartamento,
						[idCargo] = @idCargo
					 WHERE
						[id] = @id;

					SET @Respuesta ='Ok'
					SET @Leyenda = 'Se ha actualizado de manera correcta el usuario: '+@usuario+' al Sistema'

				END
			
			IF (@iTransaccion = 'ELIMINAR_USUARIO')
				BEGIN
					SELECT  @id = CONVERT(INT,DATO_XML.X.value('id[1]','INT')),
							@usuario = LTRIM(RTRIM(DATO_XML.X.value('usuario[1]','VARCHAR(50)')))
					FROM @iXML.nodes('/users') AS DATO_XML(X)

					DELETE FROM [users]
					WHERE [id] = @id;

					SET @Respuesta ='Ok'
					SET @Leyenda = 'Se ha eliminado de manera correcta el usuario del Sistema'
				END
			
			IF @@TRANCOUNT > 0
				BEGIN
					COMMIT TRANSACTION TRX_DATOS;
				END
	END TRY
	
	BEGIN CATCH
		IF @@TRANCOUNT > 0
			BEGIN
				ROLLBACK TRANSACTION TRX_DATOS;
			END
		
		SET @Respuesta = 'ERROR'
		SET @Leyenda = 'Inconvenientes para realizar la transaccion: ' + @iTransaccion + '_ Error: ' + ERROR_MESSAGE()
	END CATCH

    -- Insert statements for procedure here
	SELECT @Respuesta AS Respuesta, @Leyenda AS Leyenda
END

/***BUSCAR DATOS***/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
/*************/
ALTER PROCEDURE [dbo].[getConsulta]
	@iTransaccion	as VARCHAR(50),
	@iXML			as XML = NULL
AS
BEGIN
	SET NOCOUNT ON;
	DECLARE @respuesta		AS VARCHAR(10);
	DECLARE @leyenda		AS VARCHAR(50);
	DECLARE @usuario		AS VARCHAR(50);
	DECLARE @departamento	AS VARCHAR(50);
	DECLARE @cargo			AS VARCHAR(50);

	BEGIN TRY
		IF (@iTransaccion = 'BUSCAR_USUARIO')
			BEGIN
				SET @usuario = (select @iXML.value('(/users/usuario)[1]','VARCHAR(50)'))
				
				SELECT U1.*
				FROM users U1
				WHERE U1.usuario = @usuario

				SET @respuesta = 'Ok';
				SET @leyenda ='Consulta Exitosa';
				END

		IF (@iTransaccion = 'BUSCAR_DEPARTAMENTO')
			BEGIN
				SET @departamento = (select @iXML.value('(/departamento/nombre)[1]','VARCHAR(50)'))
				
				SELECT D1.*
				FROM departamento D1
				WHERE D1.nombre = @departamento

				SET @respuesta = 'Ok';
				SET @leyenda ='Consulta Exitosa';
				END

		IF (@iTransaccion = 'BUSCAR_CARGO')
			BEGIN
				SET @cargo = (select @iXML.value('(/cargo/nombre)[1]','VARCHAR(50)'))
				
				SELECT C1.*
				FROM cargo C1
				WHERE C1.nombre = @cargo

				SET @respuesta = 'Ok';
				SET @leyenda ='Consulta Exitosa';
				END

	END TRY

	BEGIN CATCH
		SET @respuesta = 'error';
		SET @leyenda ='Error al ejecutar el comando en la BD: ' + ERROR_MESSAGE();
	END CATCH

	SELECT @respuesta as respuesta, @leyenda as leyenda
END
GO 