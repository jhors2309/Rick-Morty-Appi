import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

function CardCharacter({ image, name, species, status, gender }) {
  const statusClass =
    status === 'Alive'
      ? 'character-status character-status-alive'
      : status === 'Dead'
        ? 'character-status character-status-dead'
        : 'character-status character-status-unknown';

  const statusLabel =
    status === 'Alive'
      ? 'Vivo'
      : status === 'Dead'
        ? 'Muerto'
        : 'Desconocido';

  return (
    <Card className="character-card" elevation={0}>
      <CardActionArea className="character-card-action">
        <div className="character-image-wrap">
          <img
            className="character-image"
            src={image}
            alt={`Imagen de ${name}`}
            loading="lazy"
          />
        </div>

        <CardContent className="character-card-content">
          <Typography
            gutterBottom
            variant="h5"
            component="h2"
            className="character-name"
          >
            {name}
          </Typography>

          <dl className="character-details">
            <div className="detail-row">
              <dt>Especie</dt>
              <dd>{species}</dd>
            </div>

            <div className="detail-row">
              <dt>Género</dt>
              <dd>{gender}</dd>
            </div>

            <div className="detail-row detail-row-status">
              <dt>Estado</dt>
              <dd>
                <span className={statusClass}>{statusLabel}</span>
              </dd>
            </div>
          </dl>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default CardCharacter;
