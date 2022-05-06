import React from 'react';
import Card from '../components/Card';
import Navigation from '../components/Navigation';

const Chantier_ext = () => {
    return (
        <div>
            <Navigation />

            <div class="content_1">
          <p class="content_p">
            Vous souhaitez rénover votre maison pour la mettre au goût du jour
            ?<br />
            Grâce à notre enduit décoratif à la chaux naturelle et poudre de
            marbre,<br />
            vous allez pouvoir réaliser vos rêves : changer de maison sans
            déménager…
          </p>
        </div>
        <h5 class="card-title">Rénovez votre maison de l’extérieur !</h5>
        <p class="card-text"> Au fil des années, une façade se détériore, ces dégradations sont
          dues en grande partie aux facteurs climatiques et à la pollution. Il
          faut bien entendu l’entretenir régulièrement. Mais arrive un moment
          où une façade doit être entièrement rénovée. C’est alors l’occasion
          idéale pour lui apporter un cachet unique en optant pour un enduit
          DECOPIERRE aspect pierre naturelle. Grâce à notre concept, vous
          n’allez pas seulement rénover votre extérieur mais donner à votre
          maison une nouvelle identité… Les solutions que vous offre
          <strong> Pierres De L'oise</strong> sont nombreuses et variées. Vous
          pouvez choisir de rénover intégralement votre façade selon le style
          de votre région : pierre de taille, briques, etc. D’autre part, vous
          avez la possibilité de mettre l’accent sur certaines parties de
          votre extérieur : les encadrements, les chaines d’angles, les
          modénatures, etc.</p>
          <Card /><Card/>
        </div>
    );
};

export default Chantier_ext;