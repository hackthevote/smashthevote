import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    this.store.push({
      data: [
        {
          id: 'jobs',
          type: 'topic',
          attributes: {
            name: 'jobs'
          },
          relationships: {
            leave: {
              data: {
                id: 1,
                type: 'position'
              }
            },
            remain: {
              data: {
                id: 2,
                type: 'position'
              }
            }
          }
        },
        {
          id: 'environment',
          type: 'topic',
          attributes: {
            name: 'environment'
          },
          relationships: {
            leave: {
              data: {
                id: 3,
                type: 'position'
              }
            },
            remain: {
              data: {
                id: 4,
                type: 'position'
              }
            }
          }
        },
        {
          id: 'economy',
          type: 'topic',
          attributes: {
            name: 'economy'
          },
          relationships: {
            leave: {
              data: {
                id: 5,
                type: 'position'
              }
            },
            remain: {
              data: {
                id: 6,
                type: 'position'
              }
            }
          }
        },
        {
          id: 'travel',
          type: 'topic',
          attributes: {
            name: 'travel'
          },
          relationships: {
            leave: {
              data: {
                id: 7,
                type: 'position'
              }
            },
            remain: {
              data: {
                id: 8,
                type: 'position'
              }
            }
          }
        },
        {
          id: 'democracy',
          type: 'topic',
          attributes: {
            name: 'democracy'
          },
          relationships: {
            leave: {
              data: {
                id: 9,
                type: 'position'
              }
            },
            remain: {
              data: {
                id: 10,
                type: 'position'
              }
            }
          }
        },
        {
          id: 1,
          type: 'event',
          attributes: {
            name: 'Registration deadline',
            date: new Date(2016, 5, 7),
            official: true
          }
        },
        {
          id: 2,
          type: 'event',
          attributes: {
            name: 'EU Referendum',
            date: new Date(2016, 5, 23),
            official: true
          }
        },
        {
          id: 3,
          type: 'event',
          attributes: {
            name: 'BBC Young people debate',
            date: new Date(2016, 4, 26),
            official: false
          }
        },
        {
          id: 4,
          type: 'event',
          attributes: {
            name: 'David Cameron live interview on Sky',
            date: new Date(2016, 5, 2),
            official: false
          }
        },
        {
          id: 5,
          type: 'event',
          attributes: {
            name: 'Michale Gove live interview on Sky',
            date: new Date(2016, 5, 3),
            official: false
          }
        },
        {
          id: 6,
          type: 'event',
          attributes: {
            name: 'Nigel Farage & David Cameron live on ITV',
            date: new Date(2016, 5, 7),
            official: false
          }
        },
        {
          id: 7,
          type: 'event',
          attributes: {
            name: 'Young people debate Daniel Hannan vs Chuka Umunna - Evening standard',
            date: new Date(2016, 5, 7),
            official: false
          }
        },
        {
          id: 8,
          type: 'event',
          attributes: {
            name: 'ITV Debate',
            date: new Date(2016, 5, 9),
            official: false
          }
        },
        {
          id: 9,
          type: 'event',
          attributes: {
            name: 'BBC Question Time, special EU Referendum edition',
            date: new Date(2016, 5, 15),
            official: false
          }
        },
        {
          id: 10,
          type: 'event',
          attributes: {
            name: 'BBC Live Debate at Wembley arena',
            date: new Date(2016, 5, 21),
            official: false
          }
        }
      ],
      included: [
        {
          id: 1,
          type: 'position',
          attributes: {
            headline: 'Leaving will create more opportunities for employment',
            body: `<p>The Leave side argues that leaving the EU will create far 
<a href="http://getbritainout.org/eu-myths-facts/">more jobs for Britons</a> in the long-term. 
The UK would gain the power to strike its <a href=" http://www.voteleavetakecontrol.org/briefing_trade">own trade deals</a>, 
creating new business opportunities and leading to higher levels of job creation.</p><p>The UK would be able to rebuild 
relationships, particuarly with the Commonwealth countries that the leave side views as having been damaged by the UK's 
membership of the EU.</p>`
          }
        },
        {
          id: 2,
          type: 'position',
          attributes: {
            headline: 'Three million jobs depend on the EU',
            body: `<p>Remain believes that more than three million jobs in the UK are linked to trade with the EU.</p>
<p>Staying in the EU could result in the creation of an additional 790,000 jobs by 2030.  </p>`
          }
        },
        {
          id: 3,
          type: 'position',
          attributes: {
            headline: `We don't need the EU to protect the environment`,
            body: `<p>In some animal protection policies, the UK has been ahead of the EU. For example, the UK banned 
animal testing for cosmetics in 1998, with an EU <a href="https://www.greenparty.org.uk/news/2016/04/10/green-party-to-highlight-benefits-of-eu-membership-for-animal-welfare/">ban following in 2009.</a></p>
<p>As the EU&apos;s environmental regulations are more stringent than China and India&apos;s, it could mean that 
businesses are at a competitive disadvantage against rivals from outside the EU</p>`
          }
        },
        {
          id: 4,
          type: 'position',
          attributes: {
            headline: `The EU has greatly enhanced protections for the environment and animal welfare`,
            body: `<p>Under EU rules, industry has to abide by laws on emissions which means we have cleaner air and 
beaches.</p><p>In addition the EU has promoted energy saving electronics and protection for endangered species.
The EU has banned testing cosmetics on animals and ended the trade in cat and dog fur.</p>`
          }
        },
        {
          id: 5,
          type: 'position',
          attributes: {
            headline: `There's more to trade than Europe - the EU holds us back`,
            body: `<p>Only 6% of UK firms export to the EU. Many countries around the world trade with the EU without 
accepting the supremacy of EU law. According to Eurostat, in 2014, the share of UK goods exports going to countries 
outside the EU is <a href="http://www.voteleavetakecontrol.org/briefing_trade">higher than every other EU member state</a> 
bar Malta.</p>`
          }
        },
        {
          id: 6,
          type: 'position',
          attributes: {
            headline: `Leaving the EU would critically weaken UK trade`,
            body: `<p>70% of major businesses expect to experience &apos;some&apos; or &apos;significant&apos; damage 
if we left Europe. 200,000 UK businesses trade with the EU. For every £1 we put into the EU we get £10 back.</p>`
          }
        },
        {
          id: 7,
          type: 'position',
          attributes: {
            headline: `Our borders are broken`,
            body: `<p>Our current border control arrangements are immoral, expensive, 
<a href="http://www.voteleavetakecontrol.org/briefing_immigration">and out of control</a>. Whilst Britons could need a 
visa “or <a href="http://www.dailymail.co.uk/wires/pa/article-3556455/Visa-requirement-agenda-UK-votes-Brexit-Leave-campaigner-says.html"> 
some other kind of check</a>” to travel to continental Europe, if we leave the EU, we would regain greater control of 
our borders. There were 475,000 live births to mothers from other EU countries between 2005 and 2014, the equivalent of 
adding a city the size of <a href="http://www.voteleavetakecontrol.org/briefing_immigration">Manchester to the population</a>.</p>`
          }
        },
        {
          id: 8,
          type: 'position',
          attributes: {
            headline: `EU membership gives every UK citizen incredible opportunities to work and study within Europe`,
            body: `<p>It is a fundamental principle of EU law that UK citizens can work in, and move between, EU 
countries without restrictions. This has provided new opportunities for British people and British people are major 
beneficiaries of the EU’s free movement laws. It is estimated that between 1.4 and 2.2 million British people <a href="http://lawyers-inforbritain.uk/b-m-a/the-eu-gives-uk-citizens-greater-opportunities-to-live-work-study-and-travel-abroad/">live in other EU countries</a>.</p>
<p>Only 3.6% of the UK population is from another EU country. Most immigrants <a href=" http://www.migrationobservatory.ox.ac.uk/briefings/immigration-category-workers-students-family-members-asylum-applicants">come from outside the EU</a></p>`
          }
        },
        {
          id: 9,
          type: 'position',
          attributes: {
            headline: `We have to retake our democracy from the EU`,
            body: `<p>EU law is supreme over UK law. This stops the British public from being able to vote out those 
who make our laws.</p><p>The &apos;Supreme Court&apos; is the European Court of Justice rather than our own. We&apos;ve 
lost control of trade, human rights, and migration. EU laws have cost British taxpayers 
<a href="http://www.voteleavetakecontrol.org/briefing_control">£2.4 billion</a></p>`
          }
        },
        {
          id: 10,
          type: 'position',
          attributes: {
            headline: `Democracy is working within the EU`,
            body: `<p>EU laws are made by elected national governments and directly-elected MEPs. MEPs are 
<a href="http://www.europarl.europa.eu/aboutparliament/en/20150201PVL00004/Powers-and-procedures">100% elected</a>,
 unlike in the British parliament where the House of Lords is entirely unelected, but still makes laws.</p><p> Britain 
 <a href="http://www.independent.co.uk/news/uk/politics/chatham-house-backs-eu-referendum-remain-campaign-a7019691.html">retains control</a> 
 of 98% of government spending and sets its own policies on <a href=""></a>almost every issue of serious concern to 
 British voters - including health, education, pensions, welfare, monetary policy, defence and border security</p>`
          }
        }
      ]
    });
  }
});
