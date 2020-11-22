'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('activity_report_forms', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.BIGINT
      },
      document_id: {
        type: Sequelize.BIGINT,
        references: {
          model: 'documents', 
          key: 'id',
        }
      },
      council_id: {
        type: Sequelize.BIGINT,
        references: {
          model: 'councils', 
          key: 'id',
        }
      },
      activity_request_form_id: {
        type: Sequelize.BIGINT,
        references: {
          model: 'activity_request_forms', 
          key: 'id',
        }
      },
      output: {
        type: Sequelize.TEXT
      },
      narrative_report: {
        type: Sequelize.TEXT
      },
      resource_person_invited: {
        type: Sequelize.STRING
      },
      cyc_representative_id: {
        type: Sequelize.BIGINT,
        references: {
          model: 'councils', 
          key: 'id',
        }
      },
      no_of_recipients: {
        type: Sequelize.INTEGER
      },
      no_of_participants: {
        type: Sequelize.INTEGER
      },
      received_by: {
        type: Sequelize.BIGINT,
        references: {
          model: 'chapter_personnels', 
          key: 'id',
        }
      },
      date_time: {
        type: Sequelize.DATE
      },
      submitted_by: {
        type: Sequelize.BIGINT,
        references: {
          model: 'officers', 
          key: 'id',
        }
      },
      noted_by: {
        type: Sequelize.BIGINT,
        references: {
          model: 'council_advisors', 
          key: 'id',
        }
      },
      council_pres_sig: {
        type: Sequelize.BOOLEAN
      },
      council_adv_sig: {
        type: Sequelize.BOOLEAN
      },
      received_by_sig: {
        type: Sequelize.BOOLEAN
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('activity_report_forms');
  }
};