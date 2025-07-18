import { Calendar, CreditCard, DollarSign, Filter, TrendingUp, User } from 'lucide-react';
import { useDispatch, useSelector } from 'react-redux';
import { getPaiementState } from '../../../Redux/Slice/PaiementSlice';
import { AppDispatchType } from '../../../Redux/Store';
import { useEffect } from 'react';
import { getAllPaiements } from '../../../Redux/AsyncThunk/PaiementThunk';
import { PaiementType } from '../../../types';

const PaymentsModule = () => {

  const { datas, action } = useSelector(getPaiementState);
  const dispatch: AppDispatchType = useDispatch();
  useEffect(() => {
    dispatch(getAllPaiements());
  }, [dispatch]);

  let totale: number = 0 ; 
  datas.map( (paiement: PaiementType ) => {
    totale  += paiement.montant 
  })

  return (
    <div className='space-y-6'>

      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">
            Gestion des Paiements
          </h2>
          <p className="text-gray-600">
            Suivez et gérez toutes les transactions financières
          </p>
        </div>
        <button className="bg-gradient-to-r from-purple-500 to-pink-600 text-white px-4 py-2 rounded-lg hover:shadow-lg transition-all flex items-center space-x-2">
          <DollarSign className="w-4 h-4" />
          <span>Enregistrer Paiement</span>
        </button>
      </div>

      {/* Les CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="rounded-xl shadow-sm border p-6 bg-white border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">
                Total Payé
              </p>
              <p className="text-2xl font-bold text-emerald-500">
                { totale } Ar
              </p>
            </div>
            <div className="w-12 h-12 rounded-lg flex items-center justify-center bg-emerald-100">
              <TrendingUp className="w-6 h-6 text-emerald-500" />
            </div>
          </div>
        </div>

        {/* <div className="rounded-xl shadow-sm border p-6 bg-white border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">
                En Attente
              </p>
              <p className="text-2xl font-bold text-yellow-500">
                0Ar
              </p>
            </div>
            <div className="w-12 h-12 rounded-lg flex items-center justify-center bg-yellow-100">
              <Calendar className="w-6 h-6 text-yellow-500" />
            </div>
          </div>
        </div>

        <div className="rounded-xl shadow-sm border p-6 bg-white border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">
                En Retard
              </p>
              <p className="text-2xl font-bold text-red-500">
                0Ar
              </p>
            </div>
            <div className="w-12 h-12 rounded-lg flex items-center justify-center bg-red-100">
              <CreditCard className="w-6 h-6 text-red-500" />
            </div>
          </div>
        </div> */}
      </div>

      {/* LISTE DE PAIEMENT  */}
      <div className="rounded-xl shadow-sm border p-6 bg-white border-gray-200">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-semibold text-gray-900">
            Paiements Récents
          </h3>
          <div className="flex items-center space-x-4">
            <Filter className="w-4 h-4 text-gray-400" />
            <select

              className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 bg-white border-gray-200 text-gray-900"
            >
              <option value="all">Tous les statuts</option>
              <option value="paye">Payé</option>
              <option value="en-attente">En Attente</option>
              <option value="en-retard">En Retard</option>
            </select>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-3 px-4 font-medium text-gray-900">Client</th>
                <th className="text-left py-3 px-4 font-medium text-gray-900">Montant</th>
                <th className="text-left py-3 px-4 font-medium text-gray-900">Reste</th>
                <th className="text-left py-3 px-4 font-medium text-gray-900">Date</th>
                <th className="text-left py-3 px-4 font-medium text-gray-900">Actions</th>
              </tr>
            </thead>
            <tbody>
              {datas.map((data: PaiementType) =>
                <tr>
                  <td className="py-4 px-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center">
                        <User className="w-4 h-4 text-white" />
                      </div>
                      <span className="font-medium text-gray-900 flex flex-col gap-1">
                        <div>
                          {data.client.nom_compet}
                        </div>
                        <div className='text-gray-500 text-sm'>
                          {data.client.email}
                        </div>
                      </span>
                    </div>
                  </td>
                  <td className="py-4 px-4">
                    {data.montant}
                  </td>
                  <td className="py-4 px-4">
                    {data.reservation.montant_total - data.montant}
                  </td>
                  <td className="py-4 px-4">
                    {new Date(data.created_At).toLocaleDateString('fr-FR')}
                  </td>
                  <td className="py-4 px-4">
                    <div className="flex space-x-2">
                      <button className="px-3 py-1 text-blue-500 hover:bg-blue-50 rounded text-sm transition-colors">
                        Voir
                      </button>
                      <button className="px-3 py-1 bg-gradient-to-r from-emerald-500 to-teal-600 text-white rounded text-sm hover:shadow-lg transition-all">
                        Marquer Payé
                      </button>
                    </div>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

    </div>
  )
}

export default PaymentsModule